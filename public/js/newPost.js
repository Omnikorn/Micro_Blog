const { create } = require("../../models/user");

const submitBtn = document.getElementById('Submit');

const createNewPost = async (event) => {
    event.preventDefault();
    const postText = document.getElementById('text').value;

    await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            postText
        }),
        headers: { 'Content-Type': 'application/json'},
    });

    
}

submitBtn.onclick(createNewPost);