const navbar = document.querySelector("#panel");
const hamburgerButton = document.querySelector("#hamburger-icon");

// Function for hamburger Button
const changeIcon = (icon) => {
    navbar.classList.toggle("active");
    icon.classList.toggle("fa-square-xmark");
};
