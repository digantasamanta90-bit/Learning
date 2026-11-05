const authRouter = require("express").Router();
const { register, login } = require("../controlllers/auth.controllers.js");

authRouter.post("/register", register);
authRouter.get("/login", login);

module.exports = authRouter;