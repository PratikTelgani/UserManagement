const express = require('express');
const app = express();
const mongodb = require('mongodb');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');
const DOA = require('./models/usersDOA'


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

app.use('/css', express.static(path.resolve(__dirname, "views")))


app.use('/', require('./routes/index'));


mongoose.connect('mongodb+srv://pratshash:pratshash@cluster0.jjquq.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
}).then(async client=>{
    usersDOA.injectdb(client);
    app.listen(8000, ()=> console.log("Server started on port 8000..."));

})
.catch(err => {
    console.log(err)
})

