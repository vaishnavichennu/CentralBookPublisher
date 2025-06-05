// const express = require('express');
// const router = express.Router();
// const db = require('../config/db'); // mysql2/promise connection

// // CREATE
// router.post('/', async (req, res) => {
//   try {
//     const { ordid, custname, phone, ordtotal, paidby, transaction, isreturn, orderref } = req.body;
//     const [result] = await db.query(
//       'CALL AddOrder(?, ?, ?, ?, ?, ?, ?, ?)',
//       [ordid, custname, phone, ordtotal, paidby, transaction, isreturn, orderref]
//     );
//     res.json({ message: 'Order added successfully', result });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // READ
// router.get('/', async (req, res) => {
//   try {
//     const [rows] = await db.query('CALL GetAllOrders()');
//     res.json(rows[0]); // Only first result set
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // UPDATE
// router.put('/:id', async (req, res) => {
//   try {
//     const { ordid, custname, phone, ordtotal, paidby, transaction, isreturn, orderref } = req.body;
//     await db.query(
//       'CALL UpdateOrder(?, ?, ?, ?, ?, ?, ?, ?, ?)',
//       [req.params.id, ordid, custname, phone, ordtotal, paidby, transaction, isreturn, orderref]
//     );
//     res.json({ message: 'Order updated successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // DELETE
// router.delete('/:id', async (req, res) => {
//   try {
//     await db.query('CALL DeleteOrder(?)', [req.params.id]);
//     res.json({ message: 'Order deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

// File: backend/routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// POST   /api/orders       → Create a new order
router.post('/', verifyToken, isAdmin, orderController.createOrder);

// GET    /api/orders       → Get all orders
router.get('/', verifyToken, isAdmin, orderController.getAllOrders);

// PUT    /api/orders/:id   → Update a specific order
router.put('/:id', verifyToken, isAdmin, orderController.updateOrder);

// DELETE /api/orders/:id   → Delete a specific order
router.delete('/:id', verifyToken, isAdmin, orderController.deleteOrder);

module.exports = router;
