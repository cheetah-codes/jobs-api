const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide name"],
    minlength: 3,
    maxlegth: 50,
  },
  email: {
    type: String,
    required: [true, "Please Provide name"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide password"],
    minlength: 6,
    maxlength: 12,
  },
});

UserSchema.pre("save", async function (next) {
  //before we save to the document,we can hash the pashword
  //salt is the generated random bit
  //this points to the document i.e instance of the collection
  //next() move the app to the next middleware
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id, name: this.name }, "jwtSecret", {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compare(password,this.password)
    return isMatch
}

module.exports = mongoose.model("User", UserSchema);
