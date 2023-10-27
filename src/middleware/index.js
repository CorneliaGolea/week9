const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../user/model");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPass = async (req, res, next) => {
  try {
    console.log("hashPass");
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);

    next();
  } catch (error) {
    resp.status(501).json({ errormessage: error.message, error });
  }
};

const comparePass = async (req, res, next) => {
  try {
    req.user = await User.findOne({ where: { username: req.body.username } });

    req.match = await bcrypt.compare(req.body.password, req.user.password);

    next();

    //find the user
    //compare password
    //1a.username incorrect
    //1b.password incorrect
    //2.works
  } catch (error) {
    res.status(501).json({ errormessage: error.message, error });
  }
};

const tokenCheck = async (req, res, next) => {
  console.log("hello token check", req.header("Authorization"));
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log("token", token);
    console.log(process.env.SECRET_KEY);

    const decodedToken = await jwt.verify(token, process.env.SECRET_KEY);
    console.log("decodedToken", decodedToken);
    req.user = await User.findOne({ where: { id: decodedToken.id } });
    console.log("req.user");
    next();

    // console.log("realDecoded:", realDecoded);
  } catch (error) {
    res.status(501).json({ errormessage: error.message, error });
  }
};

module.exports = {
  hashPass,
  comparePass,
  tokenCheck,
};
