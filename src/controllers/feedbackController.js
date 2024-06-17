const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createFeedback = async (req, res) => {
    const { content, rating } = req.body;
    const userId = req.session.user.id;

    try {
        const feedback = await prisma.feedback.create({
            data: { userId, content, rating },
        });
        res.status(201).json({ message: 'Feedback submitted successfully', feedback });
    } catch (error) {
        res.status(400).json({ error: 'Feedback submission failed' });
    }
};

exports.getFeedback = async (req, res) => {
    const feedback = await prisma.feedback.findMany();
    res.json(feedback);
};
