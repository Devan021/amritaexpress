const express = require('express');
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Welcome', message: 'This is the index page', user: req?.session?.user });
});

router.get('/login', (req, res) => {
    if (req.session.user) return res.redirect('/dashboard');
    res.render('login', { title: 'Login' });
});

router.get('/register', (req, res) => {
    if (req.session.user) return res.redirect('/dashboard');
    res.render('register', { title: 'Register' });
});

router.get('/dashboard', async (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    if (req.session.user.role === 'ADMIN') {
        const cleaningOrders = await prisma.order.findMany({ where: { type: 'CLEANING' }, include: { user: true }}).then(orders => orders).catch(err => console.error(err));
        const laundryOrders = await prisma.order.findMany({ where: { type: 'LAUNDRY' }, include: { user: true }}).then(orders => orders).catch(err => console.error(err));
        res.render('admindashboard', {title: 'Admin Dashboard', user: req.session.user, cleaningOrders, laundryOrders });
    } else
        res.render('dashboard', { title: 'Dashboard', user: req.session.user });
});

router.get('/schedule-cleaning', (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    const user = prisma.user.findUnique({
        where: {
            id: req.session.user.id
        }
    });
    res.render('schedulecleaning', { title: 'Schedule Cleaning', user: req.session.user });
});

router.get('/schedule-laundry', (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    res.render('schedulelaundry', { title: 'Schedule Laundry', user: req.session.user });
});

router.get('/payment', (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    res.render('payment', { title: 'Payment', user: req.session.user });
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
