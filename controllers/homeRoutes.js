const router = require("express").Router();
const { Model } = require("sequelize/types");
const {Post,user, User} = require("../models");
const withAuth = require ("../utils/auth.js")


router.get("/", async(req,res)=> {
    const postData = await Post.findAll({ 
        include:[
            {
            model: User,
            attributes:["user_name"]
        }
        ]
    })
})



