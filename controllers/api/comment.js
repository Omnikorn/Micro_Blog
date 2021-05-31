const router = require("express").Router()
const withAuth = require ("../../utils/auth")

// const { put } = require("../homeRoutes");
const { Post, Comment, User } = require("../../models")

router.post("/", withAuth, async (req, res) => {
	console.log(req.body)
	try {
		const commentData = await Comment.create({
		
				post_id: req.body.id,
				comment_text: req.body.comm,
				user_id: req.session.user_id,
			
		})
		res.json(commentData)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
