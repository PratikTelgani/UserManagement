const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const router = express.Router();


router.get('/', (req,res)=>{
    res.render('index')
})
router.get('/add_user', (req,res)=>{
    res.render('add_user');
})

router.post('/add_user', (req, res)=>{
    
})

module.exports = router; 