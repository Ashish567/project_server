const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);



const auth = require('./routes/auth');



const mongoose = require('mongoose');
const users = require('./routes/users');
const express = require('express');
const app = express();
const cors = require('cors')



mongoose.connect('mongodb://localhost/mongo-games')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong   ', err));

app.use(express.json());
app.use(cors());
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


