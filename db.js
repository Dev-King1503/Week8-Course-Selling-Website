const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
console.log("Connected to")


const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String,
})

const courseSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String,
})

const adminSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})  

const purchaseSchema = new Schema({
    userid: ObjectId,
    courseId: ObjectId
})


const userModel = mongoose.model("user",userSchema)
const adminModel = mongoose.model("admin",adminSchema)
const purchaseModel = mongoose.model("purchase",purchaseSchema)
const courseModel = mongoose.model("course",courseSchema)


module.exports = {
    userModel,
    adminModel,
    purchaseModel,
    courseModel
}
