const db = require('../config/db');

// CREATE
exports.createOrderline = async (req, res) => {
  try {
    const { ordid, productid, qty, unitprice } = req.body;
    const [result] = await db.query(
      'CALL create_orderline(?, ?, ?, ?)',
      [ordid, productid, qty, unitprice]
    );
    res.json({ message: 'Orderline added successfully', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
exports.getOrderlines = async (req, res) => {
  try {
    const [rows] = await db.query('CALL get_orderlines()');
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 
// UPDATE
exports.updateOrderline = async (req, res) => {
  try {
    const { ordid, productid, qty, unitprice } = req.body;
    const[result]=await db.query(
      'CALL update_orderline(?, ?, ?, ?, ?)',
      [req.params.id, ordid, productid, qty, unitprice]
    );
    
    //checking if orderline with the id exists
    const updateInfo = result.affectedRows !== undefined
      ? result
      : result[0]; 
    // If `updateInfo.affectedRows` is zero, no rows matched.
    if (updateInfo.affectedRows === 0) {
      return res.status(404).json({ error: 'Orderline not found' });
    }

    res.json({ message: 'Orderline updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteOrderline = async (req, res) => {
  try {
    await db.query('CALL delete_orderline(?)', [req.params.id]);
    res.json({ message: 'Orderline deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
