const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

const emailInput = this.elements.email;
const passwordInput = this.elements.password;
    
if (!emailInput.value || !passwordInput.value) {
    alert("All fields must be filled.");
    return;
    } 
const formInput = {
    email: emailInput.value,
    password: passwordInput.value,
};
    
    console.log(formInput);
    this.reset();
});