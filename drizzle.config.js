require("dotenv").config();

module.exports = {
  schema: "./schema/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://postgres:admin1234@localhost:5432/admin_db",
  },
};
