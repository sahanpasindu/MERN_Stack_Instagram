const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { JWT_SECRET } = require('../keys');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
   const { authorization } = req.headers;

   // authorization === Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWNhODRiMmM0NmVjNDJjOTg3ZTY4NjUiLCJpYXQiOjE1OTAzOTI0NDJ9.xQncmWNuYE2g0C3GG3N7KEj-WIsXPcRB860C-8J9mV8
   if (!authorization) {
      return res.status(401).json({ error: "You must be logged in" });
   }
   const token = authorization.replace("Bearer ", "");
   jwt.verify(token, JWT_SECRET, (err, payload) => {
      if (err) {
         return res.status(401).json({ error: "You must be logged in" });
      }
      const { _id } = payload;
      User.findById(_id).then(userdata => {
         req.user = userdata;
      })
      next();
   });
}