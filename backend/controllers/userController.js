const asyncHandler= require("express-async-handler"); 
const bcrypt= require("bcryptjs"); 

const User= require("../models/userModel"); 


const registerUser = asyncHandler( async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Incomeplete Data");
  }

  const userExits = await User.findOne({email}); 
  if(userExits){
    res.status(400); 
    throw new Error("User already Exist"); 
  }

  const salt= await bcrypt.genSalt(10); 
  const hashedPassword= await bcrypt.hash(password, salt); 

  const user= await User.create({
    name: name, 
    email: email, 
    password: hashedPassword
  }); 
  if(user){
    res.status(200).json({
        _id: user._id, 
        name: user.name, 
        email: user.email 

    })
  }else {
    res.status(400); 
    throw new Error("Invalid user name")
  }

});
const loginUser = asyncHandler (async (req, res) => {
  res.send("Login Route");
});

module.exports = {
  registerUser,
  loginUser,
};
