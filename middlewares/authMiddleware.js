const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = async(req, res, next) => {
    const userToken =  req.headers.Authorization || req.headers.authorization;
    console.log(userToken);
    const token = userToken.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id } = decoded
        const user = User.findById(id);
        if (!user) {
            throw new Error("No user found");
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

module.exports = authMiddleware;
