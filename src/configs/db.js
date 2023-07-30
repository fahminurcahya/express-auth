import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db", "adad", "dadad", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
  },
  timezone: "+07:00", // here
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// testConnection();

export default sequelize;
