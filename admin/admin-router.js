const express = require('express');
// this brings in express
const Admins = require('./admin-model.js');
// this brings in the db
const router = express.Router();
// this allows us to create a mini server. ().listen will not work.



router.get('/', (req, res) => {
    Admins.find()
      .then(admins => {
        res.json(admins);
      })
      .catch(err => res.send(err));
  });
  
  module.exports = router;
  