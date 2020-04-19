const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');

const PORT = 4000;

const Car = require('./models/Car')


//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:false}));


//ROUTES
app.get('/', (req, res) => {
    res.send('<h1>Full Stack Homework</h1>');
});

app.get('/cars', (req, res) => {
    res.render('index.ejs', {
        cars: Car,
    });
});

//new 
app.get('/cars/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/cars', (req, res) => {
    Car.push(req.body);
    //should above array be cars?
    res.redirect('/cars')
});

app.get('/cars/:index', (req, res) => {
    res.render('show', {
        car: Car[req.params.index]
    });
});


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));