const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/users');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index')
})
router.get('/add_user', (req,res)=>{
    res.render('add_user');
})

router.post('/add_user', (req, res)=>{
    let {name, email, gender, status} = req.body;
    const newUser = User.insertOne({
        Name: name,
        Email: email,
        Gender: gender,
        Status: status
    }).then(user =>{
        newUser.save().then(user =>{
            req.flash("success_msg", "USER ADDED SUCCESSFULLY!!");
        })
        .catch(err =>{
            console.log(err);
        })
    })
})

module.exports = router; 