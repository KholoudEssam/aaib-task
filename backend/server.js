const express = require('express');

const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config({ path: './config/config.env' });
require('./config/db');

require('./config/data')();

const reportsRoute = require('./routes/reports');
const AppError = require('./utils/AppError');

app.use(cors());

app.use('/reports', reportsRoute);

app.use('*', (req, res, next) => next(new AppError('Invalid route', 404)));

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || 'Server down');
});

app.listen(process.env.PORT, () => console.log('Server is listening..'));
