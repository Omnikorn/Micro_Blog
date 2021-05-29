const router = require("express").Router();

// const { put } = require("../homeRoutes");
const {Post,Comment, User} = require("../../models");



router.put("/comment" , async (req,res) =>{
    try{
        const commentData = await Comment.create ({
            where:{
                post_id:req.body.id,
                comment_text:req.body.comm,
                user_id:1
            }
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router