const cardsEl = document.getElementsByClassName('card')
const commentBoxEl = document.getElementsByClassName('.comment-box')
const commentTextEl = document.getElementById('comment-text')

function displayCommentBox () {
    console.log(this)
    const commentBoxEl = this.querySelector('.comment-box')
    commentBoxEl.style.display = "block"    
}

const SubmitComment = async () => {
    const commentText = commentTextEl.value.trim()

    if (commentText) {
        // console.log('has both!!!')
        const response = await fetch('/api/posts/comment', {
          method: 'POST',
          body: JSON.stringify(commentText),
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