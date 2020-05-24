const express = require('express'); // import express , export function
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = mongoose.model('User');

router.get('/', (req, res) => {
   res.send('Hello');
});

router.post('/signup', (req, res) => {

   const { email, name, password } = req.body;

   // if required fields are missing
   if (!name || !email || !password) {
      return res.status(422).json({ error: "Please add all the fields" });
   }

   User.findOne({ email: email }).then((user) => {
      // already there is a registered email
      if (user) {
         return res.status(422).json({ error: "This email already exist in our database" });
      }
      // there is no email already registerd email
      else {
         const user = new User({
            email, name, password
         });

         user.save()
            .then(user => {
               res.json({ message: "Saved successfully" });
            })
            .catch(err => {
               console.log(err);
            })
      }
   }).catch(err => { console.log(err); });
});

module.exports = router;