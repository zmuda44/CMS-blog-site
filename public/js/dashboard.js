const userPostEl = document.getElementsByClassName('user-posts')

// const updatePostForm = document.getElementsByClassName('.update-post-form')
const postForm = document.querySelector('.post-form')


function showUpdateForm() {
  
    const postUpdateFormEl = this.querySelector('.update-post-form')
    postUpdateFormEl.style.display = "block";
    console.log(postUpdateFormEl)
    document.querySelector('.space-holder').style.display = "none"
}


function showForm () {
  postForm.style.display = "block";
  document.querySelector('.space-holder').style.display = "none"
}

async function newPost (e) {
    e.preventDefault();
    
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    const user_id = this.id;
    
    if (title && content && user_id) {

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


postForm.addEventListener('submit', newPost);

for (post of userPostEl) {
  // const postID = post.id
  console.log(postId)
  post.addEventListener('click', showUpdateForm)

  // const postUpdateForm = post.getElementById('')
}

document.querySelector('.new-post-btn').addEventListener('click', showForm)
// document.querySelector('.update-post-form').addEventListener('click', showUpdateForm)