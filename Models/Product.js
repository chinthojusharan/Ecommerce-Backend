const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  description:String,
  category:String,
  link:String,
  img:String,
  discount:Number,
  Offerprice: Number,
  rating:Number,
  reviews:String,
});

const Product = mongoose.model("Product",productSchema);
module.exports = Product;
