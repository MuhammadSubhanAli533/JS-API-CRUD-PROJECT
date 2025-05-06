 let arr=[];
function createUser(){

    const inputField=document.querySelector("#name").value;
    const inputNumber=document.querySelector("#age").value;

    arr.push({inputField,inputNumber});
    console.log(arr)

    showValues(arr);

}
    function showValues(value){

        userList.innerHTML= value.map(

            (Element)=> `<li>Name : ${Element.inputField}</li>
            <li>Name : ${Element.inputNumber}</li>
            <button onclick="EditHandler()">Edit</button>
            <button onclick="DeleteValue()">Delete</button>`
            
    ).join("")
    }

    function EditHandler(){


        const user=users.find(element.index)



 }



     function DeleteValue(val){

        arr.splice(val,1);
        showValues(arr);

    }

let arr = [];
let editIndex = null;

function createUser() {
  const inputField = document.querySelector("#name").value;
  const inputNumber = document.querySelector("#age").value;

  if (!inputField || !inputNumber) {
    alert("Please enter name and age.");
    return;
  }

  arr.push({ name: inputField, age: inputNumber });
  document.querySelector("#name").value = "";
  document.querySelector("#age").value = "";
  showValues(arr);
}

function showValues(users) {
  const userList = document.getElementById("userList");
  userList.innerHTML = users
    .map((element, index) => 
      `<li>
          Name: ${element.name} <br> 
          Age: ${element.age} <br>
          <button onclick="editHandler(${index})">Edit</button>
          <button onclick="deleteValue(${index})">Delete</button>
       </li><br>`
    )
    .join("");
}

function editHandler(index) {
  const user = arr[index];
  document.querySelector("#name").value = user.name;
  document.querySelector("#age").value = user.age;
  editIndex = index;
  document.getElementById("updateBtn").style.display = "inline";
}

function updateUser() {
  const updatedName = document.querySelector("#name").value;
  const updatedAge = document.querySelector("#age").value;

  if (editIndex !== null) {
    arr[editIndex] = { name: updatedName, age: updatedAge };
    editIndex = null;
    showValues(arr);
    document.querySelector("#name").value = "";
    document.querySelector("#age").value = "";
    document.getElementById("updateBtn").style.display = "none";
  }
}

function deleteValue(index) {
  arr.splice(index, 1);
  showValues(arr);
}

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


let arr = [];
let editIndex = null;

Load existing users from API
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users") // replace with your API endpoint
    .then(res => res.json())
    .then(data => {
      arr = data;
      showValues(arr);
    });
}

CREATE (Add user)
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

READ (Already done in showValues)

EDIT
function editHandler(index) {
  const user = arr[index];
  document.querySelector("#name").value = user.name;
  document.querySelector("#age").value = user.age;
  editIndex = index;
  document.getElementById("updateBtn").style.display = "inline";
}

UPDATE
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

DELETE
function deleteValue(index) {
  const id = arr[index].id;

  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE"
  }).then(() => {
    arr.splice(index, 1);
    showValues(arr);
  });
}

Call loadUsers() on page load
window.onload = loadUsers;


