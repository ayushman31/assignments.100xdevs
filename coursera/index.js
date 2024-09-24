const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const  mongoose  = require("mongoose");
require('dotenv').config();
const dbUrl = process.env.MONGO_URL;

const app = express();

app.use("/user" , userRouter)
app.use("/course" , courseRouter)
app.use("/admin" , adminRouter)

async function main(){
    await mongoose.connect(dbUrl);
    app.listen(3000);
}

main();