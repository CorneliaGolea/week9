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

// const tokenCheck = async (req, res, next) => {
//   try {

//     const realDecoded = await jwt.verify(realToken, process.env.SECRET_KEY);

//     console.log("realDecoded:", realDecoded);
//   } catch (error) {
//     console.log("invalid token", error);
//   }
// };

// const tokenCheck = req.header("Authorisation");
// console.log(token);

module.exports = {
  hashPass,
  comparePass,
};
