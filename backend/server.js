
// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Route files
// const schoolRoutes = require('../routes/school');
// const categoryRoutes = require('../routes/category');
// const productRoutes = require('../routes/product');
// const customerRoutes = require('../routes/customer'); // 
// const ordersRoutes = require('../routes/orders');
// const orderlinesRoutes = require('../routes/orderlines');
// app.use(cors());
// app.use(express.json());

// // Route registration
// app.use('/api/schools', schoolRoutes);
// app.use('/api/categories', categoryRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/customer', customerRoutes); //  
// app.use('/api/orders', ordersRoutes);
// app.use('/api/orderlines', orderlinesRoutes);

// // Server start
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// File: backend/server.js

const app = require('./app');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



