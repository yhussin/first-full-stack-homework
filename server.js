const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const PORT = 4000;

const Car = require('./models/Car')

//ROUTES
app.get('/', (req, res) => {
    res.send('<h1>Full Stack Homework</h1>');
});

app.get('/cars', (req, res) => {
    res.render('index', {
        cars: Car,
    });
});

app.get('/cars/:index', (req, res) => {
    res.render('show', {
        car: Car[req.params.index]
    });
});


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));