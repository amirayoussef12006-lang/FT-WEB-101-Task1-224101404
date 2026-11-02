// Get the theme button
const themeButton = document.getElementById("themeButton");

// Listen for a click event
themeButton.addEventListener("click", function() {

    // Toggle the dark class on the body
    document.body.classList.toggle("dark");

});