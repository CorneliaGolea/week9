const User = require("./model");
const { Sequelize } = require("sequelize");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    console.log("Register");
    console.log(req.body);
    const user = await User.create(req.body);
    // req.body.password =
    //   "$2b$10$7u.kpovr3DZGrzmeybh3h.EtrXjmPZtlZPgdvqAPq5sQDR.jliW3a";
    console.log(user);

    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const login = async (req, res) => {
  try {
    console.log(req.user.id);
    const token = await jwt.sign({ id: req.user.id }, process.env.SECRET_KEY);

    res.status(201).json({
      message: "success",
      user: { username: req.user.username, token },
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({ message: "success", users });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
};
