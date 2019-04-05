const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const passport = require('passport');
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

//register hamdle
router.post('/register', (req, res) => {
    const {
        name,
        email,
        password,
        password2
    } = req.body;
    //console.log(req.body);
    let errors = [];
    if (!name || !email || !password || !password2) {
        errors.push({
            msg: "please fill in all fields"
        });
    }
    if (password !== password2) {
        errors.push({
            msg: "password must be same"
        });
    }
    if (password.length < 6) {
        errors.push({
            msg: "password should be at least 6 characters"
        });
    }
    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email
        });
    } else {
        //validation pass
        User.findOne({
                email: email
            })
            .then(user => {
                if (user) {
                    //user exits
                    console.log("user exits");
                    errors.push({
                        msg: "Email is already register"
                    });
                    res.render('register', {
                        errors,
                        name,
                        email,
                    });
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });

                    //Hashing
                    bcrypt.genSalt(10, (err, salt) =>
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            //set password to hash
                            newUser.password = hash;
                            //save user
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', 'you are now registered');
                                    res.redirect('/user/login')
                                })
                                .catch(err => console.log(err))
                        }))



                    // newUser.save(function (error) {
                    //     console.log("Your bee has been saved!");
                    //     if (error) {
                    //         console.error(error);
                    //     }
                    // });
                    console.log(newUser);

                }
            });
    }
});

//login handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/user/login',
        failureFlash: true
    })(req, res, next);
});

//logout handle
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'you are logged out');
    res.redirect('/user/login');
})
module.exports = router;