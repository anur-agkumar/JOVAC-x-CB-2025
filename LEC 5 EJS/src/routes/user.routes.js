const express = require("express")
const userModel = require("../model/user.model")
const mongoose = require("mongoose")
const router = express.Router()
// /register


router.get("/", async(req, res)=>{

   const users = await userModel.find()
    console.log(users);
   
    
    res.render("home",{title : "home page" , users })
})

router.get("/register",(req,res)=>{
    res.render("register",{ title : "register page"})
})  


router.post("/register", async (req, res)=>{
    
    const {name , email, picture } = req.body

    const user =  await userModel.create({
        name,
        email,
        picture
    })
    console.log(user);
    
    res.redirect("/register-successful")
    
})



router.get("/register-successful", (req,res)=>{
    res.render("registered", {title : "successful"})
})

router.patch("/update/:id",async (req, res)=>{
    let userId = req.params.id
    let { name } = req.query
    console.log(userId);
    
    if(!userId){
        return res.json({message : "user id is required"})
    }

    // false ----> ! ----> true
    if(!mongoose.Types.ObjectId.isValid(userId)){
        return res.json({message : "Invalid user id"})
    }

    

    if(!name){
        return res.json({message : "name is required"})
    }

    let user = await userModel.findById(userId)
    // null ----> falsy value

    if(!user){
        return res.json({message : "user not found"})
    }


    await userModel.findByIdAndUpdate(
        {_id : userId} ,
        {name : name}
)
    console.log(user);
    
    res.json({message : "user update successful" })
    
})


router.delete("/delete/:id", async (req, res)=>{
    let userId = req.params.id

    if(!mongoose.Types.ObjectId.isValid(userId)){
        return res.json({message : "Invalid user id"})
    }

    let user = await userModel.findById(userId)
    // null ----> falsy value

    if(!user){
        return res.json({message : "user not found"})
    }

    const userData = await userModel.findByIdAndDelete(userId)

    res.json({message : "user data deleted successfully...", userData})
})




module.exports = router