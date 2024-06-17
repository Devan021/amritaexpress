const express = require('express');
const { authMiddleware, adminMiddleware } = require('../../middlewares/authMiddleware');
const complaintController = require('../../controllers/complaintController');
const router = express.Router();

router.post('/create', authMiddleware, complaintController.createComplaint);
router.get('/', authMiddleware, adminMiddleware, complaintController.getComplaints);
router.put('/update', authMiddleware, adminMiddleware, complaintController.updateComplaintStatus);

module.exports = router;
