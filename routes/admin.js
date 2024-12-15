const Router = require("express")
const adminRouter = Router()
const { adminModel } = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_ADMIN_SECRET} = require("../config")
// adminRouter.use(adminRouter.middleware)  Can have restriction in adminpage

// bcrypt for hashing passwords
// zod or jsonwebtokens can also be used

adminRouter.post("/signup",async(req,res)=>{
    res.json({
        message: "You are signed up"
    })
    try{
        await adminModel.create({
        email: email,// When key-value pair looks same only key can also be written
        password: password,
        firstname: firstaname,
        lastname: lastname,
        })
    }catch(e){
        res.json({
            message: "Hey your signup has failed"
        })
    }
})

adminRouter.post("/signin",async(req,res)=>{
    const{email,password} = req.body

    const admin = await adminModel.findOne({
        email,
        password,
    }) 

    if(admin){
        jwt.sign({
            id : user._id
        },JWT_ADMIN_SECRET)
    

    // Cookie logic can be used
        res.json({
            token: token
        })
    }else{
        res.send(403).json({
            message: "Incorrect cred"
        })
    }

    res.json({
        message: "You have signed in"
    })
})


adminRouter.post("/",(req,res)=>{ // course add karne ke liye by admin
    res.json({
        message: "You have signed in"
    })
})

adminRouter.put("/course",(req,res)=>{  // update course karne ke liye by admin
    res.json({
        message: "You are signed up"
    })
})

adminRouter.get("/course/bulk",(req,res)=>{ // course dekhne ke liye by admin
    res.json({
        message: "You have signed in"
    })
})


module.exports = {
    adminRouter: adminRouter
}