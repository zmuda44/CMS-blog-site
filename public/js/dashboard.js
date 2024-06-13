function showForm () {
  postForm.style.display = "block";
  document.querySelector('.space-holder').style.display = "none"
}

async function newPost (e) {
    e.preventDefault();
    
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
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
          document.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        }
    }
};









const postForm = document.querySelector('.post-form')
postForm.addEventListener('submit', newPost);

document.querySelector('.new-post-show').addEventListener('click', showForm)