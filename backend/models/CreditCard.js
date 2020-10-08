const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let CreditCard = new Schema({
    creditCardNumber: {
        type: String,
        required: true
    },
    cardHolder: {
        type: String,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    securityCode: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: true
    }
}, {
    collection: 'creditcard'
});

module.exports = mongoose.model('CreditCard', CreditCard);