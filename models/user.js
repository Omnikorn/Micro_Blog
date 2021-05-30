const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection.js")
const bcrypt = require("bcrypt")

console.log("User triggered")
class User extends Model {
	checkPassword(password) {
		return bcrypt.compareSync(password, this.user_password)
	}
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_password: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		user_email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
	},
	/*
	{
		hooks: {
			beforeCreate: async (newUser) => {
				newUser.user_password = await bcrypt.hash(
					newUser.user_password,
					2
				)
				return newUser
			},
		},
	} */
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "user",
	}
)

module.exports = User
