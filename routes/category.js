const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE
router.post('/', async (req, res) => {
  try {
    const { code, name } = req.body;
    const [result] = await db.query('INSERT INTO category (catname, catcode) VALUES (?, ?)', [catname, catcode]);
    res.json({ message: 'Category added', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM category');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const { code, name } = req.body;
    await db.query('UPDATE category SET catname = ?, catcode = ? WHERE id = ?', [catname, catcode, req.params.id]);
    res.json({ message: 'Category updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM category WHERE id = ?', [req.params.id]);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

