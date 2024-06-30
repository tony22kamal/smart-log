var anchor = document.querySelector("#anchor");
var anchor1 = document.querySelector("#anchor-1");
var logInBtn = document.querySelector("#login");
var signBtn = document.querySelector("#sign");
var logOutBtn = document.querySelector("#out");
var nameInput = document.querySelector("#name");
var emailLoginInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var allUsers = [];
var loggedInUser = {};

signBtn?.addEventListener("click", function () {
  signUp();
});
logInBtn?.addEventListener("click", function () {
  logIn();
});

if (localStorage.getItem("loggedInUser") != null) {
  loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
}

if (localStorage.getItem("users") != null) {
  allUsers = JSON.parse(localStorage.getItem("users"));
}
var userName = localStorage.getItem("sessionUserName");
function signUp() {
  var user = {
    name: nameInput.value,
    email: emailLoginInput.value,
    password: passwordInput.value,
  };

  allUsers.push(user);
  localStorage.setItem("users", JSON.stringify(allUsers));

  clear();
  location.replace("./index.html");
}

function logIn() {
  var user = {
    email: emailLoginInput.value,
    password: passwordInput.value,
  };
  check(user);
  clear();
}

function clear() {
  if (nameInput) {
    nameInput.value = "";
  }
  emailLoginInput.value = "";
  passwordInput.value = "";
}

function logOut() {
  location.replace("./index.html");
}

function check(user) {
  for (var i = 0; i < allUsers.length; i++) {
    if (
      user.email === allUsers[i].email &&
      user.password === allUsers[i].password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(allUsers[i]));
      location.replace("./welcome.html");
    } else {
      console.log("wrong");
    }
  }
}
if (document.querySelector("#user")) {
  document.querySelector("#user").innerHTML = "welcome" + "" + loggedInUser.name;
}


