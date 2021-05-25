const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection.js")

class Comment extends Model {}

Comment.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},
	comment_text: {
		type: DataTypes.STRING,
		allowNull: false,
	},
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "comment"  
}


);

module.exports = Comment
