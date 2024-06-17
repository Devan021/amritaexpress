const express = require('express');
const authRoutes = require('./authRoutes');
const orderRoutes = require('./orderRoutes');
const complaintRoutes = require('./complaintRoutes');
const feedbackRoutes = require('./feedbackRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/orders', orderRoutes);
router.use('/complaints', complaintRoutes);
router.use('/feedback', feedbackRoutes);

module.exports = router;
