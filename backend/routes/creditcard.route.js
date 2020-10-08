const express = require('express');
const app = express();
const creditCardRoute = express.Router();

// Employee controllers
const credit_card_controller = require('../controllers/creditcard.controller');

//Create Employee API
creditCardRoute.post('/create', credit_card_controller.credit_card_create);

module.exports = creditCardRoute;

/*
// Employee Model
const Employee = require('../models/Employee');

// Add Employee
employeeRoute.route('/create').post((req, res, next) => {
    Employee.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

// Get All Employees
employeeRoute.route('/').get((req, res, next) => {
    Employee.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single employee
employeeRoute.route('/read/:id').get((req, res, next) => {
    Employee.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update employee
employeeRoute.route('/update/:id').put((req, res, next) => {
    Employee.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            res.json(data)
            console.log('Data updated successfully');
        }
    })
})

// Delete employee
employeeRoute.route('/delete/:id').delete((req, res, next) => {
    Employee.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
}) 
*/
