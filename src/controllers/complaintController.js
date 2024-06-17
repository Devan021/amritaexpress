const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createComplaint = async (req, res) => {
    const { description } = req.body;
    const userId = req.session.user.id;

    try {
        const complaint = await prisma.complaint.create({
            data: { userId, description },
        });
        res.status(201).json({ message: 'Complaint registered successfully', complaint });
    } catch (error) {
        res.status(400).json({ error: 'Complaint registration failed' });
    }
};

exports.getComplaints = async (req, res) => {
    const complaints = await prisma.complaint.findMany();
    res.json(complaints);
};

exports.updateComplaintStatus = async (req, res) => {
    const { id, status } = req.body;

    try {
        const complaint = await prisma.complaint.update({
            where: { id },
            data: { status },
        });
        res.json({ message: 'Complaint status updated', complaint });
    } catch (error) {
        res.status(400).json({ error: 'Complaint update failed' });
    }
};
