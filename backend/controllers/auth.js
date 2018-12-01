const bycrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../config/default');
const {validationResult} = require('express-validator/check');

const User = require('../models/user');

const signUp = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation  failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    const {email, name, password} = req.body;

    bycrpt.hash(password, 12)
        .then(hashedPsw => {
            const user = new User({
                email,
                name,
                password: hashedPsw
            });

            return user.save();
        })
        .then(result => {
            res.status(201)
                .json({
                    message: 'User Created',
                    result: true
                });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

const logIn = (req, res, next) => {
    const {email, password} = req.body;

    let loadedUser;

    User.findOne({email: email})
        .then(user => {
            if (!user) {
                const error = new Error('A user with this email could not be found');
                error.statusCode = 401;
                throw error;
            }
            loadedUser = user;
            return bycrpt.compare(password, loadedUser.password);
        })
        .then(isEqual => {
                if (!isEqual) {
                    const error = new Error('Wrong Password');
                    error.statusCode = 401;
                    throw error;
                }

                const token = jwt.sign(
                    {
                        email: loadedUser.email,
                        userId: loadedUser._id.toString()
                    },
                    key,
                    {
                        expiresIn: '1h'
                    }
                );

                res.status(200).json(
                    {
                        token,
                        userId: loadedUser._id.toString()
                    });
            }
        )
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })

};

module.exports = {
    logIn,
    signUp
};