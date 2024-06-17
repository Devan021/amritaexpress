const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const routes = require('./routes');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
