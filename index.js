// Routing of routes has been done
require('dotenv').config()

const express = require("express")
// const jwt = require("jsonwebtoken")
// const mongoose = require("mongoose")
// const JWT_SECRET = ""
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())


app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);


async function main(){
    await mongoose.connect(process.env.Mongo_url)
    app.listen(3000)  
    console.log("Listening on 3000")  
}

main();