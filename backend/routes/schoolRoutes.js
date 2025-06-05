
// const express = require('express');
// const router = express.Router();
// const db = require('../config/db'); // mysql2/promise connection

// // CREATE
// router.post('/', async (req, res) => {
//   try {
//     const { name, phonenumber, code } = req.body;
//     const [result] = await db.query('CALL AddSchool(?, ?, ?)', [
//       name,
//       phonenumber,
//       code,
//     ]);
//     res.json({ message: 'School added' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // READ
// router.get('/', async (req, res) => {
//   try {
//     const [rows] = await db.query('CALL GetAllSchools()');
//     res.json(rows[0]); // because stored procedures return a nested array
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // UPDATE
// router.put('/:id', async (req, res) => {
//   try {
//     const { name, phonenumber, code } = req.body;
//     await db.query('CALL UpdateSchool(?, ?, ?, ?)', [
//       req.params.id,
//       name,
//       phonenumber,
//       code,
//     ]);
//     res.json({ message: 'School updated' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // DELETE
// router.delete('/:id', async (req, res) => {
//   try {
//     await db.query('CALL DeleteSchool(?)', [req.params.id]);
//     res.json({ message: 'School deleted' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');


// POST   /api/schools       → Create a new school
router.post('/', verifyToken, isAdmin, schoolController.createSchool);

// GET    /api/schools       → Get all schools
router.get('/', verifyToken, isAdmin, schoolController.getAllSchools);

// PUT    /api/schools/:id   → Update a specific school
router.put('/:id', verifyToken, isAdmin, schoolController.updateSchool);

// DELETE /api/schools/:id   → Delete a specific school
router.delete('/:id', verifyToken, isAdmin, schoolController.deleteSchool);

module.exports = router;


