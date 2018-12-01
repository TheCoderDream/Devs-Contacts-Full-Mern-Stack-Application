const path = require('path');

const {validationResult} = require('express-validator/check');
const Contact = require('../models/contact');

const getContacts = (req, res, next) => {
    Contact.find()
        .then(contacts => {
            res.status(200).json({
                message: 'Fetched contacts successfully',
                contacts
            })
        }).catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
    })
};