require("dotenv").config()
require('./db')
require("./config")
const express = require("express")
const app=express()
const bodyParser = require('body-parser');


// Basic middleware Setup
// Add headers in order to perform all operation on API
// Because CORS Thing (Google it if you do not know)
const CorsPermission = require("./middleware/corsPermission")
app.use(CorsPermission);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routers
const userRouter = require("./router/userRouter")
const cartRouter = require("./router/cartRouter")
const productRouter = require("./router/productRouter")
const contactRouter = require("./router/contactRouter")
const orderRouter = require("./router/orderRouter")



// AUTHENTICATION AND AUTHORIZATION Routing
app.use("/api/v1/",userRouter)


// Product Routing
app.use("/api/v1/product",productRouter)
// Cart Routing
app.use("/api/v1/cart",cartRouter)


// Contact Routing
app.use("/api/v1/contactus",contactRouter)

// order Routing
app.use("/api/v1/order",orderRouter)

// default router
app.use("*", (req, res)=> {
    res.send("welcomes at ecommerce rest api")
})


// Satrt app
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server is running ${port}`);
})