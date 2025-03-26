document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
    const englishButton = document.getElementById("english");
    const hebrewButton = document.getElementById("hebrew");

    englishButton.addEventListener("click", () => {
        menuItems.forEach(item => {
            item.textContent = item.dataset.en;
        });
    });

    hebrewButton.addEventListener("click", () => {
        menuItems.forEach(item => {
            item.textContent = item.dataset.he;
        });
    });
});
