/* const Car = [
    {make: 'Toyota', model: 'Corolla', year: 1996},
    {make: 'Honda', model: 'Civic', year: 2006},
    {make: 'Nissan', model: 'Altima', year: 2020},
]; */

const mongoose = require('mongoose');
const CarSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
}, {timestamps: true});

const Car = mongoose.model('Car', CarSchema);
module.exports = Car;