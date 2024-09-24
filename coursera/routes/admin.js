const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const express = require("express");
const  JWT_ADMIN_PASSWORD  = process.env.JWT_ADMIN_PASSWORD;
const { adminMiddleware } = require("../middleware/admin");

adminRouter.use(express.json());




adminRouter.post("/signup", async function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  const foundUser = await adminModel.findOne({
    email: email,
  });

  if (!foundUser) {
    await adminModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    res.json({
      message: "Signup successfull",
    });
  } else {
    res.status(403).json({
      message: "User already exists.",
    });
  }
});

adminRouter.post("/login", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await adminModel.find({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user[0]._id.toString(),
      },
      JWT_ADMIN_PASSWORD
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

adminRouter.get("/mycourses", adminMiddleware, async function (req, res) {
  const creatorId = req.userId;

  const foundCourse = await courseModel.find({
    creatorId: creatorId,
  });

  if (foundCourse) {
    res.json({
      foundCourse: foundCourse,
    });
  } else {
    res.status(403).json({
      message: "No Courses available",
    });
  }
});

adminRouter.post("/create-course", adminMiddleware, async function (req, res) {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const creatorId = req.userId;

  const foundCourse = await courseModel.findOne({
    title: title,
    creatorId: creatorId
  });

  if (!foundCourse) {
    await courseModel.create({
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
      creatorId: creatorId,
      count: true,
    });

    res.json({
      message: "Course created.",
    });
  } else {
    res.status(403).json({
      message: "Course already exists.",
    });
  }
});

adminRouter.put("/edit-course", adminMiddleware, async function (req, res) {
  const creatorId = req.userId;
  const oldtitle = req.body.oldtitle;
  const newtitle = req.body.newtitle;
  const description = req.body.description;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;

  await courseModel.updateOne(
    {
      title: oldtitle,
      creatorId: creatorId,
    },
    {
      title: newtitle,
      description: description,
      price: price,
      imageUrl: imageUrl,
    }
  );
  res.json({
    message : "Course update successfully."
  })
});

adminRouter.get("/course/bulk", function (req, res) {});

module.exports = {
  adminRouter: adminRouter,
};
