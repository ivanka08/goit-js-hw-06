const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    
if (!email.value || !password.value) {
    alert("All fields must be filled.");
    } else {  console.log(email.value, password.value);
    loginForm.reset();
    }
});