const {Router} = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db");
const courseRouter = Router();
const express = require("express")
courseRouter.use(express.json())
courseRouter.post("/purchase" ,userMiddleware, async function(req , res){
    const userId = req.userId;
    const courseId = req.body.courseId;

    if(userId){
        await purchaseModel.create({
            courseId: courseId,
            userId: userId
        })

        res.json({
            message: "Purchase successfull"
        })
    } else{
        res.status(403).json({
            message: "Login First"
        })
    }
})

courseRouter.get("/preview" , async function(req , res){
    
    const courses = await courseModel.find({});
    res.json({
        courses
    })
})

module.exports = {
    courseRouter: courseRouter
}