import sequelize from "../configs/db.js";
export const getUser = async (req, res) => {
  await sequelize.authenticate();
  console.log("Connection to the database has been established successfully.");
  res.status(200).json({ msg: "Berhasil login aa" });
};
