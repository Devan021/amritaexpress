function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'aswin@am.students.amrita.edu' && password === '123456789') {
      alert('Login successful');
      window.location.href = './dashboard.html';
  } else {
      alert('Invalid username or password');
  }
}
