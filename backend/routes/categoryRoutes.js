// // const express = require('express');
// // const router = express.Router();
// // const db = require('../db');

// // // CREATE
// // router.post('/', async (req, res) => {
// //   try {
// //     const { code, name } = req.body;
// //     const [result] = await db.query('INSERT INTO category (catname, catcode) VALUES (?, ?)', [catname, catcode]);
// //     res.json({ message: 'Category added', id: result.insertId });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // READ
// // router.get('/', async (req, res) => {
// //   try {
// //     const [rows] = await db.query('SELECT * FROM category');
// //     res.json(rows);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // UPDATE
// // router.put('/:id', async (req, res) => {
// //   try {
// //     const { code, name } = req.body;
// //     await db.query('UPDATE category SET catname = ?, catcode = ? WHERE id = ?', [catname, catcode, req.params.id]);
// //     res.json({ message: 'Category updated' });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // DELETE
// // router.delete('/:id', async (req, res) => {
// //   try {
// //     await db.query('DELETE FROM category WHERE id = ?', [req.params.id]);
// //     res.json({ message: 'Category deleted' });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const db = require('../config/db'); // Uses mysql2/promise connection

// // CREATE: AddCategory procedure
// router.post('/', async (req, res) => {
//   try {
//     const { catname, catcode } = req.body;
//     const [result] = await db.query('CALL AddCategory(?, ?)', [catname, catcode]);
//     res.json({ message: 'Category added', result });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // READ: GetAllCategories procedure
// router.get('/', async (req, res) => {
//   try {
//     const [rows] = await db.query('CALL GetAllCategories()');
//     res.json(rows[0]); // Only the first result set is needed
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // UPDATE: UpdateCategory procedure
// router.put('/:id', async (req, res) => {
//   try {
//     const { catname, catcode } = req.body;
//     await db.query('CALL UpdateCategory(?, ?, ?)', [req.params.id, catname, catcode]);
//     res.json({ message: 'Category updated' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // DELETE: DeleteCategory procedure
// router.delete('/:id', async (req, res) => {
//   try {
//     await db.query('CALL DeleteCategory(?)', [req.params.id]);
//     res.json({ message: 'Category deleted' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

//------------

// const express = require('express');
// const router = express.Router();
// const categoryController = require('../controllers/categoryController');

// router.post('/', categoryController.addCategory);
// router.get('/', categoryController.getAllCategories);
// router.put('/:id', categoryController.updateCategory);
// router.delete('/:id', categoryController.deleteCategory);

// module.exports = router;

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// All category routes now require both a valid token AND admin role
router.post('/', verifyToken, isAdmin, categoryController.addCategory);
router.get('/', verifyToken, isAdmin, categoryController.getAllCategories);
router.put('/:id', verifyToken, isAdmin, categoryController.updateCategory);
router.delete('/:id', verifyToken, isAdmin, categoryController.deleteCategory);

module.exports = router;
