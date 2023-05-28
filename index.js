import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import apiRoute from "./src/routes/apiRoute.js";

dotenv.config();

const app = express();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    // store: store,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(express.json());
app.use("/api", apiRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server up and running in port ${process.env.APP_PORT}`);
});
