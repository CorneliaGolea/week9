require("dotenv").config();
const express = require("express");
const cors = require("cors");
const User = require("./user/model");
// const router = require("./middlewareExample");
const userRouter = require("./user/routes");

const port = process.env.PORT || 5001;

const syncTables = () => {
  User.sync();
};

const app = express();

app.use(express.json());
app.use(cors());
// app.use("example", router);
app.use("/users", userRouter);

app.get("/health", (req, res) => {
  res.json(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log("app is listening");
});
