const nameInput = document.querySelector("#name");
const passWord = document.querySelector("#password");
const errMessage = document.querySelector(".error-message");
const loginBtn = document.querySelector(".login-button");
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  let messages = [];

  nameInput.value === "" || nameInput.value == null
    ? messages.push("Name is required")
    : nameInput.value.length < 6
    ? messages.push("name must be greater than 6 characters")
    : nameInput.value.length > 20
    ? messages.push("name is too long")
    : "";

  passWord.value === "" || passWord.value == null
    ? messages.push("Password is required")
    : passWord.value === "password"
    ? messages.push("password cannot be password")
    : "";
  if (messages.length > 0) {
    e.preventDefault();
    errMessage.textContent = messages.join(" and ");
  }
});
