const authMiddleware = (req, res, next) => {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

const adminMiddleware = (req, res, next) => {
    if (req.session && req.session.user && req.session.user.role === 'ADMIN') {
        next();
    } else {
        res.status(403).json({ error: 'Forbidden' });
    }
};

module.exports = { authMiddleware, adminMiddleware };
