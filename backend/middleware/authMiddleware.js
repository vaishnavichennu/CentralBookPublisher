// File: backend/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.JWT_SECRET || 'supersecretkey';

// Verify token and attach user info to req.user
exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // Expect header: 'Bearer tokenHere'
  if (!authHeader) return res.status(401).json({ error: 'Authorization header missing' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token missing' });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // { id, role, email, iat, exp }
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// Role-based check: only allow admins
exports.isAdmin = (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: 'User not authenticated' });
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied: Admins only' });
  }
  next();
};
