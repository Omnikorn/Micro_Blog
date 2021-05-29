let comm = document.querySelector("#com").value();
let commbtn = document.querySelector("#combtn");

const createNewComment = async (event) =>{
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

    const response= await fetch ("/api/comment" , {
        method:"PUT",
        body: JSON.stringify({comm, id}),
    
    headers: {
        'Content-Type': 'application/json', 
    },

});
if (response.ok) {
    document.location.replace(`/post/${id}`)
} else { alert("failed to create comment")}

    };}

commbtn.addEventListener("click", createNewComment)