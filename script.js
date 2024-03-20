document.addEventListener("DOMContentLoaded", function() {
const homeButton = document.getElementById("home-button");
const hiddenContainer = document.getElementById("hidden-container");
const returnButton = document.getElementById("hidden-button4");
homeButton.addEventListener("click", function() {
    homeButton.style.display = "none";
    hiddenContainer.style.display = "grid";
});
returnButton.addEventListener("click", function() {
    homeButton.style.display = "block";
    hiddenContainer.style.display = "none";
})
})

