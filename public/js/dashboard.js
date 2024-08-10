const userPostEl = document.getElementsByClassName('user-posts')
const titleEl = document.getElementById('user-id')
console.log(titleEl)
// const updatePostForm = document.getElementsByClassName('.update-post-form')
const postForm = document.querySelector('.post-form')

const updatePostTitle = document.querySelector('.update-post-title')
const updatePostContent = document.querySelector('.update-post-content')
const updatePostBtn = document.querySelector('.update-post-btn')
const deletePostBtn = document.querySelector('.delete-post-btn')

function showUpdateForm() {

    const postUpdateFormEl = this.querySelector('.update-post-form')
    postUpdateFormEl.style.display = "block";

    document.querySelector('.space-holder').style.display = "none"
}

async function updatePost (e) {
  const title = updatePostTitle.value.trim();
  const content = updatePostContent.value.trim();

  const user_id = titleEl.getAttribute('user-id')
  const postId = this.getAttribute('post-id') 

  if (title && content && user_id) {

    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
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

}

function deletePost () {
  console.log('delete post')
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
  post.addEventListener('click', showUpdateForm)
}

document.querySelector('.new-post-btn').addEventListener('click', showForm)

updatePostBtn.addEventListener('click', updatePost);
deletePostBtn.addEventListener('click', deletePost);