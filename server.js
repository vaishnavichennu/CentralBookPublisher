
const express = require('express');
const cors = require('cors');
const app = express();

// Route files
const schoolRoutes = require('./routes/school');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const customerRoutes = require('./routes/customer'); // 

app.use(cors());
app.use(express.json());

// Route registration
app.use('/api/schools', schoolRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/customer', customerRoutes); //  

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


