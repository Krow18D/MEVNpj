const express = require('express');
const router = express.Router();
const {
    enSureAuth
} = require('../config/auth');
router.get('/', (req, res) => {
    res.render('welcome');
});

//dashboard
router.get('/dashboard', enSureAuth, (req, res) =>
    res.render('dashboard', {
        user: req.user
    })
)
module.exports = router;