const router= require("express").Router();


const homeRoutes = require ("./homeRoutes");
const singlepost = require ("./singlepost");
const apiRoutes = require ("./api");
const dashroutes = require ("./dashroutes")


router.use("/", homeRoutes);
router.use("/dashboard" , dashroutes)
router.use("/post",singlepost);
router.use("/api", apiRoutes);

module.exports= router