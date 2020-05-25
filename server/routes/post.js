const express = require('express'); // import express , export function
const router = express.Router();

const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const requireLogin = require('../middleware/requireLogin');

router.get('/allposts', (req, res) => {
   Post.find()
      .populate('postedBy', '_id name')
      .then(
         posts => {
            res.json({ posts })
         })
      .catch(err => {
         console.log(err);
      })
});

router.post('/createpost', requireLogin, (req, res) => {
   const { title, body } = req.body;

   // if required fields are missing
   if (!title || !body) {
      return res.status(422).json({ error: "Please add all the fields" });
   }
   // create modal with user data
   req.user.password = undefined; // remove password beign save
   const post = new Post({
      title,
      body,
      postedBy: req.user
   });
   // save post in database
   post.save().then(result => {
      res.json({ post: result });
   }).catch(err => {
      console.log(err);
   })
});

router.get('/mypost', requireLogin, (req, res) => {
   Post.find({ postedBy: req.user._id })
      .populate('postedBy', '_id name')
      .then(mypost => {
         res.json({ mypost })
      })
      .catch(err => {
         console.log(err);
      });
});

module.exports = router;