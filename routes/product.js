const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE
router.post('/', async (req, res) => {
  try {
    const {
      bookname, qty, unitprice, catid, schoolid,
      class: className, ismandatory,
      hindi2nd, hindi3rd, telugu2nd, telugu3rd
    } = req.body;

    const [result] = await db.query(`INSERT INTO products 
      (bookname, qty, unitprice, catid, schoolid, class, ismandatory, hindi2nd, hindi3rd, telugu2nd, telugu3rd)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [bookname, qty, unitprice, catid, schoolid, className, ismandatory, hindi2nd, hindi3rd, telugu2nd, telugu3rd]);

    res.json({ message: 'Product added', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const {
      bookname, qty, unitprice, catid, schoolid,
      class: className, ismandatory,
      hindi2nd, hindi3rd, telugu2nd, telugu3rd
    } = req.body;

    await db.query(`UPDATE products SET 
      bookname = ?, qty = ?, unitprice = ?, catid = ?, schoolid = ?, class = ?, ismandatory = ?, 
      hindi2nd = ?, hindi3rd = ?, telugu2nd = ?, telugu3rd = ? WHERE id = ?`,
      [bookname, qty, unitprice, catid, schoolid, className, ismandatory,
       hindi2nd, hindi3rd, telugu2nd, telugu3rd, req.params.id]);

    res.json({ message: 'Product updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
