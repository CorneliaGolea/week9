const bcrypt = require("bcrypt");

const User = require("../user/model");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPass = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);

    next();
  } catch (error) {
    resp.status(501).json({ errormessage: error.message, error });
  }
};

const comparePass = async (req, res, next) => {
  try {
    req.user = await User.findOne({ where: { username: req.body.username } });
    console.log(req.user);

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
// async function checkUser(username, password) {
//     //... fetch user from a db etc.

//     const match = await bcrypt.compare(password, user.passwordHash);

//     if(match) {
//         //login
//     }

//     //...

module.exports = {
  hashPass,
  comparePass,
};
