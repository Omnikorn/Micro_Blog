const User = require ("../models/user.js");
const Post = require ("../models/post.js");
const Comment = require ("../models/comment.js");


Post.belongsTo(User,{
    foreignKey:"user_id",
    onDelete:"CASCADE"
});


User.hasMany(Post,{
    foreignKey:"user_id",
});

Comment.belongsTo(Post,
    {
        foreignKey:"post_id",
        onDelete:"CASCADE"
    });

Post.hasMany(Comment,{
    foreignKey:"post_id"
});

Comment.belongsTo(User,{
    foreignKey:"user_id",
    onDelete:"CASCADE"
});


module.exports={
    User,
    Comment,
    Post,
};