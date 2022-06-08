const express = require('express');
const app = express();
const mongodb = require('mongodb');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');

// mongoose.connect('mongodb+srv://pratshash:pratshash@cluster0.jjquq.mongodb.net/?retryWrites=true&w=majority')


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

//BodyParser
app.use(express.urlencoded({extended: false}));

//Express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
})
); 
app.use(flash())
app.use((req, res, next) =>{
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
})


app.use('/users', require('./routes/index'));


app.listen(3000, console.log("Server started on port 3000..."));