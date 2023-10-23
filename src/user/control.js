const User = require("./model");

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    // req.body.password =
    //   "$2b$10$7u.kpovr3DZGrzmeybh3h.EtrXjmPZtlZPgdvqAPq5sQDR.jliW3a";

    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const login = async (req, res) => {
  try {
    if (req.user.password) {
      res.status(201).json({ message: "successful login" });
      return;
    }

    res.status(401).json({ message: "unautorised" });
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
