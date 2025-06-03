// const express = require('express');
// const router = express.Router();
// const db = require('../config/db'); // must be mysql2/promise connection

// // CREATE
// router.post('/', async (req, res) => {
//   try {
//     const { ordid, productid, qty, unitprice } = req.body;
//     const [result] = await db.query(
//       'CALL create_orderline(?, ?, ?, ?, ?)',
//       [ordid, productid, qty, unitprice]
//     );
//     res.json({ message: 'Orderline added successfully', result });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // READ
// router.get('/', async (req, res) => {
//   try {
//     const [rows] = await db.query('CALL get_orderlines()');
//     res.json(rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // UPDATE
// router.put('/:id', async (req, res) => {
//   try {
//     const { ordid, productid, qty, unitprice, totalprice } = req.body;
//     await db.query(
//       'CALL update_orderline(?, ?, ?, ?, ?, ?)',
//       [req.params.id, ordid, productid, qty, unitprice, totalprice]
//     );
//     res.json({ message: 'Orderline updated successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // DELETE
// router.delete('/:id', async (req, res) => {
//   try {
//     await db.query('CALL delete_orderline(?)', [req.params.id]);
//     res.json({ message: 'Orderline deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const orderlineController = require('../controllers/orderLineController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

router.post('/', verifyToken, isAdmin, orderlineController.createOrderline);
router.get('/', verifyToken, isAdmin,  orderlineController.getOrderlines);
router.put('/:id', verifyToken, isAdmin, orderlineController.updateOrderline);
router.delete('/:id', verifyToken, isAdmin, orderlineController.deleteOrderline);

module.exports = router;
