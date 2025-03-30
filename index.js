const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const Product = require("./Models/Product");
const Signup = require("./Models/Signup");
const Signin = require("./Models/Signin");
app.use(express.json());

app.get("/about", (req, res) => {
  res.send("Hello World!!!!!!!!!!!!!!!!");
});

app.post("/contact", (req, res) => {
  res.send("Hello World!!! Im contact page");
});







app.post("/addproducts", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
    console.log("Data Inserted");
    console.log(req.body);
  } catch (error) {
    res.send("Internal server error");
  }
});

app.get("/getproducts", async (req, res) => {
  try {
    const product = await Product.find({});
    res.json(product);
    console.log("Data Inserted");
    console.log(req.body);
  } catch (error) {
    res.send("Internal server error");
  }
});








app.post("/signup",async(req,res)=>{
    try {
        const signup = await Signup.create(req.body);
        res.json(signup);
        console.log("User Created");
        console.log(req.body);
    } catch (error) {
        res.send("Internal server error");
    }
})
app.get("/getsignup", async (req, res) => {
    try {
      const signup = await Signup.find({});
      res.json(signup);
      console.log("User fetched");
      console.log(req.body);
    } catch (error) {
      res.send("Internal server error");
    }
  });
  
  
  
  
  
  
  app.post("/signin",async(req,res)=>{
      try {
          const signin = await Signin.create(req.body);
          res.json(signin);
          console.log("User Logged In");
          console.log(req.body);
      } catch (error) {
          res.send("Internal server error");
      }
  })
  app.get("/getsignin", async (req, res) => {
      try {
        const signin = await Signin.find({});
        res.json(signin);
        console.log("User Details");
        console.log(req.body);
      } catch (error) {
        res.send("Internal server error");
      }
    });

    



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect("mongodb+srv://Sharan:sharan%4016@ecommerce.mvhxlmj.mongodb.net/")
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log("Error connecting to mongodb", err);
  });
