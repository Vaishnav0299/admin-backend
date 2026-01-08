const { pgTable, uuid, varchar, timestamp } = require("drizzle-orm/pg-core");

const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }),
  email: varchar("email", { length: 100 }),
  role: varchar("role", { length: 20 }), // admin | student | counselor
  createdAt: timestamp("created_at").defaultNow(),
});

module.exports = { users };
