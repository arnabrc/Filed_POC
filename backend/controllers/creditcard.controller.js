// Credit Card Model
const CreditCard = require('../models/CreditCard');

// Create Controller
exports.credit_card_create = function (req, res, next) {

    CreditCard.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
};