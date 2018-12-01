const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'assets')));

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE, PATCH');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
});

app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message;
    const data = err.data || null;

    res.status(status).json({message, data});
});

mongoose.connect('mongodb://localhost/contactManager', {useNewUrlParser: true})
    .then(result => {
        console.log('succesfully started');
        app.listen(process.env.PORT || 8080);
    })
    .catch(err => {
        console.log(err);
    });