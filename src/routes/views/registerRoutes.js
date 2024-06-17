const bcrypt = require("bcryptjs");
const express = require("express");
const {PrismaClient} = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();


router.get("/", (req, res) => {
    if (req.session.user) return res.redirect("/dashboard");
    res.render("register", { title: "Register" });
});

router.post('/', async (req, res) => {
    const { email, password, rollno, hostel, room } = req.body;
    console.log(email, password, rollno, hostel, room, req.body);
    if (!email || !password || !rollno || !hostel || !room) {
        return res.render('register', { title: 'Register', error: 'Missing fields' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
        return res.render('register', { title: 'Register', error: 'Username already exists' });
    }

    const user = await prisma.user.create({
        data: {
            email,
            password: await bcrypt.hash(password, 10),
            rollno,
            hostel,
            room,
        },
    });

    req.session.user = { id: user.id, role: user.role };
    res.redirect('/dashboard');
});

module.exports = router;