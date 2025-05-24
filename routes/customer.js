

const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/products', async (req, res) => {
  const { schoolcode, secondlanguage, thirdlanguage } = req.body;

  try {
    const [rows] = await db.query(`
      SELECT 
        s.name AS schoolname,
        s.phonenumber,
        p.bookname,
        p.qty,
        p.unitprice,
        p.totalprice,
        c.catname,
        p.ismandatory,
        p.hindi2nd,
        p.hindi3rd,
        p.telugu2nd,
        p.telugu3rd
      FROM 
        products p
      JOIN 
        school s ON p.schoolid = s.code
      JOIN 
        category c ON p.catid = c.catcode
      WHERE 
        s.code = ? 
        AND (
          (? = 'hindi' AND (p.hindi2nd = 1 OR p.hindi3rd = 1)) OR
          (? = 'telugu' AND (p.telugu2nd = 1 OR p.telugu3rd = 1)) OR
          (? NOT IN ('hindi', 'telugu'))
        )
        AND p.ismandatory = 1;
    `, [schoolcode, secondlanguage, thirdlanguage, secondlanguage]);

    const total = rows.reduce((sum, item) => sum + parseFloat(item.totalprice), 0);

    res.json({
      school: rows[0]?.schoolname || schoolcode,
      phone: rows[0]?.phonenumber || '',
      secondlanguage,
      thirdlanguage,
      items: rows,
      totalprice: total.toFixed(2)
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
