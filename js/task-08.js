const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

const emailInput = event.target.elements.email;
const passwordInput = event.target.elements.password;
    
if (!emailInput.value || !passwordInput.value) {
    alert("All fields must be filled.");
    return;
    } 
const formInput = {
    email: emailInput.value,
    password: passwordInput.value,
};
    
    console.log(formInput);
    event.target.reset();
});