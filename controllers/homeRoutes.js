const router = require("express").Router();

const {Post,Comment, User} = require("../models");
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

router.get("/dahsboard", withAuth, async(req,res)=>{
    try{
        const userdata = await User.findByPk(req.session,user_id, {
            attributes:{ exclude:["user_password"]},
            include:[{model: Post}],
        });

        const user=userdata.get({plain:true});
        res.render("dashboard",{
            ...user,
            logged_in:true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})



module.exports= router
