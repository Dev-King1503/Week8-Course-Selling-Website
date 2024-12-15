const Router = require("express")
const { userModel } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_SECRET_USER } = require("../config")

const userRouter = Router() // Handles routes



// Use bcrypt for hashing password
userRouter.post("/signup",async(req,res)=>{
        res.json({
            message: "You are signed up"
    })
    try{
        await userModel.create({
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

userRouter.post("/signin",async(req,res)=>{
    const{email,password} = req.body

    const user = await userModel.findOne({
        email,
        password,
    }) 

    if(user){
        jwt.sign({
            id : user._id
        },JWT_SECRET_USER)
    

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

userRouter.get("/purchases",(req,res)=>{
    res.json({
        message: "You have signed in"
    })
})


module.exports = {
    userRouter: userRouter
}





//        Another method for douiing the above step is 
/*
function createUserRoute(app){

    app.post("/user/signup",(req,res)=>{
        res.json({
            message: "You are signed up"
    })
})

    app.post("/user/signin",(req,res)=>{
        res.json({
            message: "You have signed in"
    })
})

    app.get("/user/purchases",(req,res)=>{
    
    })
}

and then exporting the module


A router routes the request by using the userRouter



*/