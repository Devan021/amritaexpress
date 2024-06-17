const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createOrder = async (req, res) => {
    const { type, details } = req.body;
    const userId = req.session.user.id;
    console.log(userId, type, details)
    try {
        const order = await prisma.order.create({
            data: { userId, type, details },
        });
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: 'Order creation failed' });
    }
};

exports.getOrders = async (req, res) => {
    const userId = req.session.user.id;
    const orders = await prisma.order.findMany({ where: { userId } });
    res.json(orders);
};

exports.updateOrderStatus = async (req, res) => {
    const { id, status } = req.body;

    try {
        const order = await prisma.order.update({
            where: { id },
            data: { status },
        });
        res.json({ message: 'Order status updated', order });
    } catch (error) {
        res.status(400).json({ error: 'Order update failed' });
    }
};
