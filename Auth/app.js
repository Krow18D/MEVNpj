const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
//passport config
require('./config/passport')(passport);
//DB
const db = require('./config/keys').MongoURI;

//connect to mongo
mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDB Connected."))
    .catch(err => console.log("Cannot connect to Mongo", err));
//ejs
app.use(expressLayout);
app.set('view engine', 'ejs');

//bodyparser
app.use(express.urlencoded({
    extended: false
}));
//express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
//passport middleware
app.use(passport.initialize());
app.use(passport.session());
//connect flash
app.use(flash());

//global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})
//router
const index = require('./routes/index');
app.use('/', index);
const user = require('./routes/user');
app.use('/user', user);



const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server starting on port ${port}`));