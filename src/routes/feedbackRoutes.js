const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const feedbackController = require('../controllers/feedbackController');
const router = express.Router();

router.post('/create', authMiddleware, feedbackController.createFeedback);
router.get('/', authMiddleware, feedbackController.getFeedback);

module.exports = router;
