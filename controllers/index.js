const router= require("express").Router();


const homeRoutes = require ("./homeRoutes");
const singlepost = require ("./homeRoutes");


router.use("/", homeRoutes);
router.use("/post",singlepost);

module.exports= router