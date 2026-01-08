const { pgTable, uuid, varchar } = require("drizzle-orm/pg-core");

const counselors = pgTable("counselors", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }),
  institution: varchar("institution", { length: 100 }),
  specialization: varchar("specialization", { length: 50 }),
});

module.exports = { counselors };
