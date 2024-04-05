JavaScript
const userContainer = document.getElementById('user-container');
const loadUsersButton = document.getElementById('load-users');

loadUsersButton.addEventListener('click', async () => {
  const users = await fetchUsers();
  displayUsers(users);
});

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  const randomUsers = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    randomUsers.push(data[randomIndex]);
  }
  return randomUsers;
}

function displayUsers(users) {
  userContainer.innerHTML = ''; // Clear previous results
  users.forEach(user => {
    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');
    userInfo.innerHTML = `
      <h3>${user.name}</h3>
      <p><b>Company:</b> ${user.company.name}</p>
      <p><b>City:</b> ${user.address.city}</p>
    `;
    userContainer.appendChild(userInfo);
  });
}
