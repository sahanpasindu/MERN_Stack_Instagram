const express = require("express"); // import express , export function
const router = express.Router();

const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const requireLogin = require("../middleware/requireLogin");

router.get("/allposts", requireLogin, (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createpost", requireLogin, (req, res) => {
  const { title, body, pic } = req.body;

  console.log(title, body, pic);
  // if required fields are missing
  if (!title || !body || !pic) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  // create modal with user data
  req.user.password = undefined; // remove password beign save
  const post = new Post({
    title,
    body,
    photo: pic,
    postedBy: req.user,
  });
  // save post in database
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/mypost", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((mypost) => {
      res.json({ mypost });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/like", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    {
      new: true, // this is because mongo will need to pass updated record
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      return res.json(result);
    }
  });
});

router.put("/unlike", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    {
      new: true, // this is because mongo will need to pass updated record
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      return res.json(result);
    }
  });
});

router.put("/comment", requireLogin, (req, res) => {
  const comment = { text: req.body.text, postedBy: req.user._id };

  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true, // this is because mongo will need to pass updated record
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        return res.json(result);
      }
    });
});

module.exports = router;
