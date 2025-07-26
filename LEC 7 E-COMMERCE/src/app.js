const express = require("express")
const indexRouter = require("./router/index.router")
const productRouter = require("./router/product.router")
const path = require("path")
const app = express()




app.set("view engine", "ejs")
app.set("views", path.join(__dirname , "views"))
app.use(express.static(path.join(__dirname , "../public")))

app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use("/", indexRouter)
// products 
app.use("/products", productRouter)


module.exports = app