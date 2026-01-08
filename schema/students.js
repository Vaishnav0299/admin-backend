const { pgTable, uuid, varchar } = require('drizzle-orm/pg-core');
const { students } = require('./schema');

module.exports.students = pgTable('students', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 100 }),
  institution: varchar('institution', { length: 100 }),
  status: varchar('status', { length: 20 }) // active / verified / blocked
});

module.exports = { students };