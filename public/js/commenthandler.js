// const { json } = require("sequelize/types");

let commbtn = document.querySelector("#combtn")

const createNewComment = async (event) => {
	console.log("js triggered")
	event.preventDefault()
	let comm = document.querySelector("#com").value

	if (event.target.hasAttribute("data-id")) {
		const id = event.target.getAttribute("data-id")
		console.log(comm, id)
		const response = await fetch("/api/comment", {
			method: "POST",
			body: JSON.stringify({ comm, id }),

			headers: {
				"Content-Type": "application/json",
			},
		})
		if (response.ok) {
			document.location.reload()
		} else {
			alert("failed to create comment")
		}
	}
}

commbtn.addEventListener("click", createNewComment)
