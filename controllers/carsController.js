const express = require('express');
const router = express.Router();

//DB
const db = require('../models');


//const Car = require('../models/Car')

router.get('/', (req, res) => {
    db.Car.find({}, (err, allCar) => {
        if (err) {
            return console.log(err);
        }

        res.render('index.ejs', {
            cars: allCar,
        });
    });
});

//new 
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

//POST create
router.post('/', (req, res) => {
    //Car.push(req.body);
    db.Car.create(req.body, (err, newCar) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/cars');
    });
});

router.get('/:id', (req, res) => {
    db.Car.findById(req.params.id, (err, foundCar) => {
        if (err) {
            console.log(err);
        }

        res.render('show', {
            car: foundCar,
        });
    });
});

//edit 
router.get('/:id/edit', (req, res) => {
    db.Car.findById(req.params.id, (err, foundCar) => {
        if (err) {
            return console.log(err);
        }

        res.render('edit', {
            //index: req.params.index,
            car: foundCar,
        });
    });
});

//update
router.put('/:id', (req, res) => {
    //console.log(req.body)
    db.Car.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedCar) => {
            if (err) {
                return console.log(err);
            }
            res.redirect(`/cars/${req.params.id}`);
        }
    )
});

router.delete('/:id', (req, res) => {
    db.Car.findByIdAndDelete(req.params.id, (err, deletedCar) => {
        if (err) {
            return console.log(err);
        }
     res.redirect('/cars');
    });
});

module.exports = router;


