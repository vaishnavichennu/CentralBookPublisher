const db = require('../config/db');

// CREATE
const addCategory = async (req, res) => {
  try {
    const { catname, catcode } = req.body;
    const [result] = await db.query('CALL AddCategory(?, ?)', [catname, catcode]);
    res.json({ message: 'Category added', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
const getAllCategories = async (req, res) => {
  try {
    const [rows] = await db.query('CALL GetAllCategories()');
    res.json(rows[0]); // First result set
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateCategory = async (req, res) => {
  try {
    const { catname, catcode } = req.body;
    await db.query('CALL UpdateCategory(?, ?, ?)', [req.params.id, catname, catcode]);
    res.json({ message: 'Category updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteCategory = async (req, res) => {
  try {
    await db.query('CALL DeleteCategory(?)', [req.params.id]);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addCategory,
  getAllCategories,
  updateCategory,
  deleteCategory
};
