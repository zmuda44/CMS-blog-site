const cardsEl = document.getElementsByClassName('card')
// const commentBoxEl = document.getElementsByClassName('.comment-box')
// const commentContentEl = document.getElementsByClassName('comment-text')
const commentBtnEl = document.getElementsByClassName('comment-btn')

function displayCommentBox () {
  console.log()
    const commentBoxEl = this.querySelector('.comment-box')
    commentBoxEl.style.display = "block"    
}

const submitComment = async (content, post_id) => {

    if (content && post_id) {
        // console.log('has both!!!')
        const response = await fetch('/api/posts/comment', {
          method: 'POST',
          body: JSON.stringify({ content, post_id }),
          // body: JSON.stringify({ commentText, req.session.id }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
    }

}

const loginFormPost = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.getElementById('username-login').value.trim();
    const password = document.getElementById('password-login').value.trim();
  
    // console.log(email)
    // console.log(password)
  
    
    if (username && password) {
      // console.log('has both!!!')
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
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






for (card of cardsEl) {
card.addEventListener('click', displayCommentBox)
}

for (btn of commentBtnEl) {
  btn.addEventListener('click', (e) => {
    const postId = e.target.getAttribute('data-post-id')
    const commentContent = document.getElementById("comment-input-post"+postId).value.trim()
    submitComment(commentContent, postId)
  })
}


