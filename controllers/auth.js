const { BadRequestError } = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  // const {name,email} = req.body;
  // // if(!name || !email || !password){
  // //  throw new BadRequestError("please Provide name, email or passowrd")
  // // }

  // const {name,email,password} = req.body;

  // const salt = await bcrypt.genSalt(10)
  // const hashedPassword = await bcrypt.hash(password,salt)

  // const tempUser = {name,email,password:hashedPassword}

  const token = jwt.sign({ userId: user._id, name: user.name }, "jwtSecret", {
    expiresIn: "30d",
  });

  const user = await User.create({ ...req.body });

  res.status(StatusCodes.CREATED).json({ token });
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
