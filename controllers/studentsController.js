const { db } = require('../config/db');
const { students } = require('../schema/students');
const { eq, and, ilike } = require('drizzle-orm');

exports.getStudents = async (req, res) => {
  try {
    const { institution, status, search } = req.query;
    let filters = [];

    if (institution) filters.push(eq(students.institution, institution));
    if (status) filters.push(eq(students.status, status));
    if (search) filters.push(ilike(students.name, `%${search}%`));

    const data = await db
      .select()
      .from(students)
      .where(filters.length ? and(...filters) : undefined);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error: error.message });
  }
};
