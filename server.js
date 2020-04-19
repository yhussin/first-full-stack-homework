const express = require('express');
const methodOverride = require('method-override');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

const carsController = require('./controllers/carsController');

const PORT = 4000;

//MIDDLEWARE
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.json);
//json is causing an error

app.use((req, res, next) => {
    console.log(`Request received, url = ${req.url}, ${new Date().toLocaleTimeString()}`);
    next();
});

//ROUTES
app.get('/', (req, res) => {
    res.send('<h1>Full Stack Homework</h1>');
});

app.use('/cars', carsController);

/* 
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

app.delete('/fruits/:index', (req, res) => {
    cars.splice(req.params.index, 1);
    
});
 */

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));