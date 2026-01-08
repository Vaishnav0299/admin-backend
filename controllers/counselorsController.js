const { db } = require('../config/db');
const { counselors } = require('../schema/counselors');
const { eq, and } = require('drizzle-orm');

exports.getCounselors = async (req, res) => {
  try {
    const { institution, specialization } = req.query;
    let filters = [];

    if (institution) filters.push(eq(counselors.institution, institution));
    if (specialization) filters.push(eq(counselors.specialization, specialization));

    const data = await db
      .select()
      .from(counselors)
      .where(filters.length ? and(...filters) : undefined);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching counselors', error: error.message });
  }
};
