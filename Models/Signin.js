const mongoose = require("mongoose");

const SigninSchema = mongoose.Schema({
  rollno: String,
  password: String,
});

const Signin = mongoose.model("Signin", SigninSchema);
module.exports = Signin;
