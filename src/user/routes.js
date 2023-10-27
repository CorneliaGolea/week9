const { Router } = require("express");
const userRouter = Router();

const { hashPass, comparePass, tokenCheck } = require("../middleware/");
const { register, login, getAllUsers } = require("./control");

userRouter.post("/", hashPass, register);

userRouter.post("/login", comparePass, login);

userRouter.get("/", tokenCheck, getAllUsers);

userRouter.get("/authCheck", tokenCheck, login);

module.exports = userRouter;
