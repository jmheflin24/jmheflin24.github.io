document.addEventListener("DOMContentLoaded", function() {
    var volunteerButton = document.getElementById("volunteerButton");
    volunteerButton.addEventListener("click", function() {
        var name = prompt("Please enter your name:");
        var email = prompt("Please enter your email:");
        console.log("Name:", name);
        console.log("Email:", email);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var newElement = document.createElement("p");
    newElement.textContent = "Welcome to our Charity Profile Page!";
    var mainContent = document.querySelector("main");
    mainContent.appendChild(newElement);
});


