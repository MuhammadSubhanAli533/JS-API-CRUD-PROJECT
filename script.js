let arr = [];
let editIndex = null;

// Load existing users from API
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users") // replace with your API endpoint
    .then(res => res.json())
    .then(data => {
      arr = data;
      showValues(arr);
    });
}

// CREATE (Add user)
function createUser() {
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;

  if (!name || !age) return alert("Please enter name and age");

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, age })
  })
    .then(res => res.json())
    .then(data => {
      arr.push(data);
      showValues(arr);
      document.querySelector("#name").value = "";
      document.querySelector("#age").value = "";
    });
}

// READ (Already done in showValues)

// EDIT
function editHandler(index) {
  const user = arr[index];
  document.querySelector("#name").value = user.name;
  document.querySelector("#age").value = user.age;
  editIndex = index;
  document.getElementById("updateBtn").style.display = "inline";
}

// UPDATE
function updateUser() {
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;

  const id = arr[editIndex].id;

  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, age })
  })
    .then(res => res.json())
    .then(updatedUser => {
      arr[editIndex] = updatedUser;
      editIndex = null;
      showValues(arr);
      document.querySelector("#name").value = "";
      document.querySelector("#age").value = "";
      document.getElementById("updateBtn").style.display = "none";
    });
}

// DELETE
function deleteValue(index) {
  const id = arr[index].id;

  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE"
  }).then(() => {
    arr.splice(index, 1);
    showValues(arr);
  });
}

// Call loadUsers() on page load
window.onload = loadUsers;
