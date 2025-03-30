const mongoose = require("mongoose");

const SignupSchema = mongoose.Schema({
  name: String,
  fathername: String,
  DOB: String,
  branch: String,
  rollno: String,
  section: String,
  address: String,
  mobilenumber: Number,
  password: String,
});

const Signup = mongoose.model("Signup", SignupSchema);
module.exports = Signup;
