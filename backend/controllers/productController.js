// File: backend/controllers/productController.js

const db = require('../config/db'); // mysql2/promise connection

// CREATE
exports.createProduct = async (req, res) => {
  try {
    const {
      bookname,
      qty,
      unitprice,
      catid,
      schoolid,
      class: className,
      ismandatory,
      hindi2nd,
      hindi3rd,
      telugu2nd,
      telugu3rd
    } = req.body;

    const [result] = await db.query(
      'CALL AddProduct(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [bookname, qty, unitprice, catid, schoolid, className,
       ismandatory, hindi2nd, hindi3rd, telugu2nd, telugu3rd]
    );

    res.json({ message: 'Product added', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ (Get All Products)
exports.getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query('CALL GetAllProducts()');
    res.json(rows[0]); // First result set from stored procedure
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateProduct = async (req, res) => {
  try {
    const {
      bookname,
      qty,
      unitprice,
      catid,
      schoolid,
      class: className,
      ismandatory,
      hindi2nd,
      hindi3rd,
      telugu2nd,
      telugu3rd
    } = req.body;

    // Call the stored procedure with 12 args (including id)
    const [procResultSets] = await db.query(
      'CALL UpdateProduct(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [req.params.id, bookname, qty, unitprice, catid, schoolid, className,
       ismandatory, hindi2nd, hindi3rd, telugu2nd, telugu3rd]
    );

    // Extract OK packet to check affectedRows
    let info;
    if (Array.isArray(procResultSets)) {
      info = procResultSets[0]; 
    } else {
      info = procResultSets;
    }

    if (info.affectedRows === 0) {
      return res.status(404).json({ error: 'Product not found or no changes made' });
    }

    res.json({ message: 'Product updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteProduct = async (req, res) => {
  try {
    const [procResultSets] = await db.query('CALL DeleteProduct(?)', [req.params.id]);

    let info;
    if (Array.isArray(procResultSets)) {
      info = procResultSets[0];
    } else {
      info = procResultSets;
    }

    if (info.affectedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
