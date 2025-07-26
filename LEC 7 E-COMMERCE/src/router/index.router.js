const express = require("express")
const productModel = require("../models/product.model")


const router = express.Router()

router.get("/", async (req, res)=>{

    const products = await productModel.find()

    res.render("home.ejs", { products : products})
})





module.exports = router