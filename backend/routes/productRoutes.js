
// //Stored proc with sql promises

// const express = require('express');
// const router = express.Router();
// const db = require('../config/db'); // Ensure this uses mysql2/promise

// // CREATE: Call AddProduct Stored Procedure
// router.post('/', async (req, res) => {
//   try {
//     const {
//       bookname, qty, unitprice, catid, schoolid,
//       class: className, ismandatory,
//       hindi2nd, hindi3rd, telugu2nd, telugu3rd
//     } = req.body;

//     const [result] = await db.query(
//       'CALL AddProduct(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
//       [bookname, qty, unitprice, catid, schoolid, className,
//        ismandatory, hindi2nd, hindi3rd, telugu2nd, telugu3rd]
//     );

//     res.json({ message: 'Product added', result });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // READ: Call GetAllProducts Stored Procedure
// router.get('/', async (req, res) => {
//   try {
//     const [rows] = await db.query('CALL GetAllProducts()');
//     res.json(rows[0]); // Result is [dataRows, ...]
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // UPDATE: Call UpdateProduct Stored Procedure
// router.put('/:id', async (req, res) => {
//   try {
//     const {
//       bookname, qty, unitprice, catid, schoolid,
//       class: className, ismandatory,
//       hindi2nd, hindi3rd, telugu2nd, telugu3rd
//     } = req.body;

//     await db.query(
//       'CALL UpdateProduct(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
//       [req.params.id, bookname, qty, unitprice, catid, schoolid, className,
//        ismandatory, hindi2nd, hindi3rd, telugu2nd, telugu3rd]
//     );

//     res.json({ message: 'Product updated' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // DELETE: Call DeleteProduct Stored Procedure
// router.delete('/:id', async (req, res) => {
//   try {
//     await db.query('CALL DeleteProduct(?)', [req.params.id]);
//     res.json({ message: 'Product deleted' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

// File: backend/routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// POST   /api/products       → Create a new product
router.post('/', productController.createProduct);

// GET    /api/products       → Get all products
router.get('/', productController.getAllProducts);

// PUT    /api/products/:id   → Update a specific product
router.put('/:id', productController.updateProduct);

// DELETE /api/products/:id   → Delete a specific product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
