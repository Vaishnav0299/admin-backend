const { db } = require('../config/db');
const { sql } = require('drizzle-orm');

exports.userGrowth = async (req, res) => {
  try {
    const result = await db.execute(sql`
      SELECT DATE_TRUNC('month', created_at) AS month, COUNT(*) as count
      FROM users
      GROUP BY month
      ORDER BY month
    `);
    res.json(result.rows || result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user growth data', error: error.message });
  }
};

exports.verificationStatus = async (req, res) => {
  try {
    const result = await db.execute(sql`
      SELECT status, COUNT(*) as count FROM students GROUP BY status
    `);
    res.json(result.rows || result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching verification status', error: error.message });
  }
};
