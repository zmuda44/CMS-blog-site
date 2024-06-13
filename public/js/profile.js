//The logic for handling the form and delete buttons go here. nothing else

async function newPost (e) {
    e.preventDefault();
    
    const title = document.getElementById("post-title").value.trim();
    const content = document.getElementById("post-content").value.trim();
    const user_id = 1;

    if (title && content && user_id) {
        // console.log('has both!!!')
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content, user_id }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          document.location.replace('/profile');
        } else {
          alert(response.statusText);
        }
    }
};









document.querySelector('.post-form-section').addEventListener('submit', newPost);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);