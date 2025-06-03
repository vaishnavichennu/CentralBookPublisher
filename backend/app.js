// File: backend/app.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Import routes
const authRoutes = require('./routes/authRoutes');
const schoolRoutes = require('./routes/schoolRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const orderlineRoutes = require('./routes/orderlineRoutes');
const customerRoutes = require('./routes/customerRoutes');

// Import middleware
// const errorHandler = require('./middleware/errorHandler');

// Apply middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/orderlines', orderlineRoutes);
app.use('/api/customer', customerRoutes);

// Global error handler
// app.use(errorHandler);

// Export app (used in server.js)
module.exports = app;
