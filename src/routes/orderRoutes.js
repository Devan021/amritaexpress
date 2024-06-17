const express = require('express');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');
const orderController = require('../controllers/orderController');
const router = express.Router();

router.post('/create', authMiddleware, orderController.createOrder);
router.get('/', authMiddleware, orderController.getOrders);
router.put('/update', authMiddleware, adminMiddleware, orderController.updateOrderStatus);

module.exports = router;
