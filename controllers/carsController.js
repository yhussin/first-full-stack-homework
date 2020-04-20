const express = require('express');
const router = express.Router();

//DB
const db = require('../models');

//const Car = require('../models/Car')

router.get('/', (req, res) => {
    res.render('index.ejs', {
        cars: Car,
    });
});

//new 
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.post('/', (req, res) => {
    Car.push(req.body);
    //should above array be cars?
    res.redirect('/cars');
});

router.get('/:index', (req, res) => {
    res.render('show', {
        car: Car[req.params.index]
    });
});

//edit 
router.get('/:index/edit', (req, res) => {
    res.render('edit', {
        index: req.params.index,
        car: Car[req.params.index],
    });
});

//update
router.put('/:index', (req, res) => {
    //console.log(req.body)
    let car = Car[req.params.index];
    car = req.body;
    Car.splice(req.params.index, 1, car);
    res.redirect(`/cars/${req.params.index}`);
});

router.delete('/:index', (req, res) => {
    Car.splice(req.params.index, 1);
    res.redirect('/cars');
});

module.exports = router;