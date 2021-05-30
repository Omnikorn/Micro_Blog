const router = require("express").Router();

const {Post,Comment, User} = require("../models");
const withAuth = require ("../utils/auth.js")


router.get("/:id", async(req,res) => {
    try{
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model:User,
                    attributes:["user_name"]
                },
                {
                    model:Comment,
                    attributes:["comment_text","user_id"]
                }, 
                {
                    model: Comment,
                    include: [User]
                }
            ]
        });

        const post=postData.get({plain:true});
            console.log(post)
        res.render("postmain", { ...post, logged_in:req.session.logged_in});
    } catch (err) {console.log("this is the error" + err)
        res.status(500).json(err);
        
    }
});



module.exports= router
