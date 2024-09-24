const {Router } = require("express");
const { userModel, courseModel, purchaseModel } = require("../db");
const express = require("express")
const userRouter = Router();
const jwt = require("jsonwebtoken");
const  JWT_USER_PASSWORD  = process.env.JWT_USER_PASSWORD;
const { userMiddleware } = require("../middleware/user");
const { default: mongoose } = require("mongoose");

userRouter.use(express.json())

userRouter.post("/signup" , async function(req , res){
    const {email , password , firstName , lastName} = req.body;  //add zod validation
    //hash the pass

    const foundUser = await userModel.findOne({
        email: email,
      });

      if (!foundUser) {
        await userModel.create({
            email,
            password,
            firstName,
            lastName
        })
    
        res.json({
          message: "Signup successfull",
        });
      } else {
        res.status(403).json({
          message: "User already exists.",
        });
      }
})

userRouter.post("/login", async function (req, res) {
    const {email , password} = req.body;
  
    const user = await userModel.find({
      email: email,
      password: password,
    });
  
    if (user) {
      const token = jwt.sign(
        {
          id: user[0]._id.toString(),
        },
        JWT_USER_PASSWORD
      );
      res.json({
        message: "Logged in",
        token: token,
      });
    } else {    
      res.status(403).json({
        message: "Invalid Credentials",
      });
    }
  });


userRouter.get("/purchases" ,userMiddleware, async function(req , res){
    const userId =new mongoose.Types.ObjectId(req.userId);
    
    console.log(userId);
    
    
    const courses = await purchaseModel.find({
        userId: userId
    });

    let purchasedCourseIds = [];

    for(let i=0; i<courses.length ; i++){
        purchasedCourseIds.push(courses[i].courseId)
    }

    const coursesList = await courseModel.find({
        _id : {$in : purchasedCourseIds}
    })
   
    console.log(purchasedCourseIds);
    

    if(coursesList.length != 0){
        res.json({
            
            coursesList
        })
    } else{
        res.status(403).json({
            message: "Buy some courses first"
        })
    }
})


module.exports = {
    userRouter: userRouter
}