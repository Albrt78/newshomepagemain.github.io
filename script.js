const hamburgerMenu = document.querySelector("#panel");
const hamburgerButton = document.querySelector("#hamburger-icon");

// Function for hamburger Button
const changeIcon = (icon) => {
    hamburgerMenu.classList.toggle("active");
    icon.classList.toggle("fa-square-xmark");
};
