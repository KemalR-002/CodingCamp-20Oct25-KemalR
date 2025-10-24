welcomeMessage();

function welcomeMessage() {
    let name = prompt("Enter your name:");
    document.getElementById("greet-name").innerText = `Welcome ${name} to My Personal Portofolio!`;
}

function validateContactForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }
    alert("Thank you for your message!");
    return true;
}

document.getElementById("send-message").addEventListener("click", function(event) {
    event.preventDefault();
    validateContactForm();
});