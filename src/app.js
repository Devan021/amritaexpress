const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const apiRoutes = require('./routes/api');
const viewRoutes = require('./routes/views');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static('public'))

app.set('views', './src/views');
app.set('view engine', 'hbs');

app.use('/api', apiRoutes);
app.use('/', viewRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
