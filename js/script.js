console.log("Hello, World!");

welcomeMessage();

function welcomeMessage() {
    // Show prompt to enter name
    let name = prompt("Enter your name:");

    // Greet the user with their name
    document.getElementById("greet-name").innerText = `Welcome to My Personal Portofolio, ${name}!`;
}