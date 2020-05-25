const express = require('express'); // import express , export function
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
         // hashed after save data
         bcrypt.hash(password, 12).then(
            hashedPassword => {
               const user = new User({
                  email, name, password: hashedPassword,
               });

               user.save()
                  .then(user => {
                     res.json({ message: "Saved successfully" });
                  })
                  .catch(err => {
                     console.log(err);
                  })
            }
         );

      }
   }).catch(err => { console.log(err); });
});

router.post('/signin', (req, res) => {
   const { email, password } = req.body;
   // if required fields are missing
   if (!email || !password) {
      return res.status(422).json({ error: "Please add all the fields" });
   }
   User.findOne({ email: email }).then(user => {
      if (!user) {
         return res.status(422).json({ error: "Invalid Email or Password" });
      } else {
         bcrypt.compare(password, user.password).then(
            doMatch => {
               if (doMatch) {
                  res.json({ message: "Succesfully signed in" });
               } else {
                  return res.status(422).json({ error: "Invalid Email or Password" });
               }
            }
         ).catch(
            err => {
               console.log(err);
            }
         )
      }
   }).catch(
      err => {
         console.log(err);
      }
   )
})
module.exports = router;