const router = require("express").Router();
// const { Model } = require("sequelize/types");
const {Post,user, User} = require("../models");
const withAuth = require ("../utils/auth.js")


router.get("/", async(req,res)=> {
   
   try {
    const postData = await Post.findAll({ 
        include:[
            {
            model: User,
            attributes:["user_name"],
        },
        ],
    
}); 

const posts = postData.map((post)=>post.get({plain:true}));

res.render("homepage", {
    posts,
    logged_in: req.session.logged_in
});

} catch (err) {
    res.status(500).json(err);
}
});

router.get("/post/:id", async(req,res) => {
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
                }
            ]
        });

        const post=postData.get({plain:true});

        res.render("postmain", { ...post, logged_in:req.session.logged_in});
    } catch (err) {
        res.status(500).json(err)
    }
});



module.exports= router
