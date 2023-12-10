document.addEventListener("DOMContentLoaded", function () {
    let emptyStorage = [];
    let data = JSON.parse(localStorage.getItem("teachers")) || emptyStorage;
});