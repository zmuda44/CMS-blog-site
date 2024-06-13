





const loginFormPost = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.getElementById('email-login').value.trim();
  const password = document.getElementById('password-login').value.trim();

  // console.log(email)
  // console.log(password)

  
  if (email && password) {
    // console.log('has both!!!')
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
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

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormPost);


