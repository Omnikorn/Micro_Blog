const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {} 

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        post_title: {
            type:DataTypes.STRING,
            allowNull:false
        },
        post_text: {
            type: DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "post"
    }
)
