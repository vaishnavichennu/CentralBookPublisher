// File: backend/controllers/orderController.js

const db = require('../config/db'); // mysql2/promise connection

// CREATE
exports.createOrder = async (req, res) => {
  try {
    const { ordid, custname, phone, ordtotal, paidby, transaction, isreturn, orderref } = req.body;

    const [result] = await db.query(
      'CALL AddOrder(?, ?, ?, ?, ?, ?, ?, ?)',
      [ordid, custname, phone, ordtotal, paidby, transaction, isreturn, orderref]
    );

    res.json({ message: 'Order added successfully', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ (Get All Orders)
exports.getAllOrders = async (req, res) => {
  try {
    const [rows] = await db.query('CALL GetAllOrders()');
    res.json(rows[0]); // Only the first result set
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateOrder = async (req, res) => {
  try {
    const { ordid, custname, phone, ordtotal, paidby, transaction, isreturn, orderref } = req.body;

    const [resultSets] = await db.query(
      'CALL UpdateOrder(?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [req.params.id, ordid, custname, phone, ordtotal, paidby, transaction, isreturn, orderref]
    );

    // Check affectedRows to ensure an order was updated
    // MySQL2 returns nested arrays; the OK packet is typically at resultSets[0]
    let info;
    if (Array.isArray(resultSets)) {
      info = resultSets[0]; 
    } else {
      info = resultSets;
    }

    if (info.affectedRows === 0) {
      return res.status(404).json({ error: 'Order not found or no changes made' });
    }

    res.json({ message: 'Order updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteOrder = async (req, res) => {
  try {
    const [resultSets] = await db.query('CALL DeleteOrder(?)', [req.params.id]);

    // Check affectedRows to ensure an order was deleted
    let info;
    if (Array.isArray(resultSets)) {
      info = resultSets[0];
    } else {
      info = resultSets;
    }

    if (info.affectedRows === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
