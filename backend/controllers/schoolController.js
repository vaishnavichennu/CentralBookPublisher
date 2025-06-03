const db = require('../config/db'); // mysql2/promise connection

// CREATE
exports.createSchool = async (req, res) => {
  try {
    const { name, phonenumber, code } = req.body;
    await db.query('CALL AddSchool(?, ?, ?)', [name, phonenumber, code]);
    res.json({ message: 'School added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ (Get All Schools)
exports.getAllSchools = async (req, res) => {
  try {
    const [rows] = await db.query('CALL GetAllSchools()');
    res.json(rows[0]); // First result set from stored procedure
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateSchool = async (req, res) => {
  try {
    const { name, phonenumber, code } = req.body;
    const [resultSets] = await db.query(
      'CALL UpdateSchool(?, ?, ?, ?)',
      [req.params.id, name, phonenumber, code]
    );

    // Extract OK packet to check affectedRows
    let info;
    if (Array.isArray(resultSets)) {
      info = resultSets[0];
    } else {
      info = resultSets;
    }

    if (info.affectedRows === 0) {
      return res.status(404).json({ error: 'School not found or no changes made' });
    }

    res.json({ message: 'School updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteSchool = async (req, res) => {
  try {
    const [resultSets] = await db.query('CALL DeleteSchool(?)', [req.params.id]);

    let info;
    if (Array.isArray(resultSets)) {
      info = resultSets[0];
    } else {
      info = resultSets;
    }

    if (info.affectedRows === 0) {
      return res.status(404).json({ error: 'School not found' });
    }

    res.json({ message: 'School deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
