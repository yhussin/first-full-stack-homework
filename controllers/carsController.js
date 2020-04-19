const express = require('express');
const router = express.Router();

//DB
const Car = require('../models/Car')

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
    res.redirect('/cars')
});

router.get('/:index', (req, res) => {
    res.render('show', {
        car: Car[req.params.index]
    });
});

router.delete('/:index', (req, res) => {
    cars.splice(req.params.index, 1);
    
});

module.exports = router;