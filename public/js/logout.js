const logout = async () => {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log("enterning the user/logout handler");
    if (response.ok) {
      
      document.location.replace('/login');
    } else {
      alert('Failed to log out');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);