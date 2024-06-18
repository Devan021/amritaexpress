function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'admin@amrita.edu' && password === 'admin123') {
        alert('Login successful');
        window.location.href = './admindashboard.html';
    } else {
        alert('Invalid username or password');
    }
  }
  