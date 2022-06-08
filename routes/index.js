const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const router = express.Router();


router.get('/', (req, res) => res.render('welcome'));

module.exports = router; 