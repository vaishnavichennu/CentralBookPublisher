
const express = require('express');
const router = express.Router();
const db = require('../db'); // must be mysql2/promise connection

// CREATE
router.post('/', async (req, res) => {
  try {
    const { name, phonenumber, code} = req.body;
    const [result] = await db.query(
      'INSERT INTO school ( name, phonenumber,code) VALUES (?, ?, ?)',
      [ name, phonenumber, code]
    );
    res.json({ message: 'School added', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM school');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const { name, phonenumber, code, } = req.body;
    await db.query(
      'UPDATE school SET code = ?, name = ?, phonenumber = ?, WHERE id = ?',
      [ name, phonenumber, code, req.params.id]
    );
    res.json({ message: 'School updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM school WHERE id = ?', [req.params.id]);
    res.json({ message: 'School deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
