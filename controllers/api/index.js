const router = require('express').Router();
const commentRoutes= require("./comment");
const userRoutes = require("./user")

router.use("/comment" , commentRoutes);
router.use("/user",userRoutes)

module.exports=router;