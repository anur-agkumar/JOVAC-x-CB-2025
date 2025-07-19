const express = require("express")
const userModel = require("../model/user.model")
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





module.exports = router