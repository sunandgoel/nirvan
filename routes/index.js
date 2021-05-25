const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')

let mentor=["a","patole","shirude","warhade","makkar","baghade","hiwase","chavan","berde","kranti","khatri","vardhaman"];
var divi=0;
var consult ="";

//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/welcome', (req, res) => {
    res.render('welcome');
});

router.get('/test', (req, res) => {
    res.render('test');
});

//------------ Dashboard Route ------------//
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard', {
    name: req.user.name
}));

router.post('/dashboard', ensureAuthenticated,(req,res)=>{  //book
     res.render("list");
});

router.get('/list', ensureAuthenticated, (req, res)=>{
    res.render("list", {name: req.user.name});
});

router.get('/test', (req, res)=>{
    res.render('test');
});
router.get('/trial', (req, res)=>{
    res.render('trial');
});
router.get('/welcome', (req, res)=>{
    res.render('welcome');
});
router.get('/tricks', (req, res)=>{
    res.render('tricks');
});
router.get('/edu', (req, res)=>{
    res.render('edu');
});
router.get('/list2', ensureAuthenticated, (req, res)=>{
    res.render("list2", {name: req.user.name});
});

module.exports = router;