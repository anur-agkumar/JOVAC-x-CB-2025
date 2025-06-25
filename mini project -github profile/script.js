 const Buttom = document.getElementById('getBtn');
    const userInput = document.getElementById('user');
    const profile = document.getElementById('profile');
    const errorMsg = document.getElementById('error');

   Buttom.addEventListener('click', async function () {
  const username = userInput.value.trim();
  if (!username) {
    showError('Please enter a username');
    return;
  }

  profile.style.display = 'none';
  errorMsg.style.display = 'none';

  try {
   
    const response = await fetch('https://api.github.com/users/' + username);

    if (!response.ok) {
      throw new Error('User not found');
    }

   
    const data = await response.json();

    // Display the user profile
    profile.style.display = 'block';
    document.getElementById('pic').src = data.avatar_url;
    document.getElementById('name').textContent = data.name || 'No name';
    document.getElementById('userName').textContent = '@' + data.login;
    document.getElementById('bio').textContent = data.bio || 'No bio';
    document.getElementById('repos').textContent = data.public_repos;
    document.getElementById('followers').textContent = data.followers;
    document.getElementById('following').textContent = data.following;

  } catch (error) {
    showError(error.message);
  }
});



    function showError(msg) {
      errorMsg.textContent = msg;
      errorMsg.style.display = 'block';
    }