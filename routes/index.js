const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/users');
const { find } = require('../models/users');
const router = express.Router();



router.get('/', (req,res)=>{
    User.find({}, (err,user)=>{
        if(err){console.log(err)}
        else{
            res.render('index', {
                users: user
            })
        }
    })
})
router.get('/add_user', (req,res)=>{
    res.render('add_user');
})
router.get('/update_user/:id', (req,res)=>{
    User.findOne({_id: req.params.id}, (err, user)=>{
        res.render('update_user', {
            user: user
        });

    })
})

router.post('/add_user', (req, res)=>{
    let {name, email, gender, status} = req.body;
    const newUser = User({
        Name: name,
        Email: email,
        Gender: gender,
        Status: status
    })
        newUser.save().then(user =>{
            req.flash("success_msg", "USER ADDED SUCCESSFULLY!!");
            res.redirect('/');
        })
})

module.exports = router; 