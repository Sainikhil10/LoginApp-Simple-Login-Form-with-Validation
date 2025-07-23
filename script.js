const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

// Demo users (simulate backend DB)
const users = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" }
];

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const username = loginForm.username.value.trim();
  const password = loginForm.password.value.trim();

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    message.style.color = 'green';
    message.textContent = `Welcome, ${username}! Login successful.`;
    // Simulate session save
    localStorage.setItem('loggedInUser', username);
  } else {
    message.style.color = 'red';
    message.textContent = 'Invalid username or password.';
  }
});
