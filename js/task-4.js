const loginForm = document.querySelector(".login-form");

function loginFormHandler(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();
  if (email !== "" && password !== "") {
    const data = { email, password };
    console.log(data);
    event.currentTarget.reset();
  } else {
    alert("All form fields must be filled in");
  }
}

loginForm.addEventListener("submit", loginFormHandler);
