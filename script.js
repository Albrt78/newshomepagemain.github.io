const hamburgerMenu = document.querySelector("#panel");
const hamburgerButton = document.querySelector("#check");

// Function for hamburger Button
const checkedInput = () => {
    if (hamburgerButton.checked) {
        hamburgerMenu.classList.toggle("active");
    } else {
        hamburgerMenu.classList.remove("active");
    }
};

hamburgerButton.onclick = checkedInput;
