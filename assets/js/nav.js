document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const closeBtn = document.querySelector(".close-btn");
    const body = document.body;

    // Open side menu
    menuToggle.addEventListener("click", function () {
        sideMenu.classList.add("open");
        body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    });

    // Close side menu
    closeBtn.addEventListener("click", function () {
        sideMenu.classList.remove("open");
        body.style.overflow = "auto"; // Restore scrolling
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sideMenu.classList.remove("open");
            body.style.overflow = "auto"; // Restore scrolling
        }
    });
});
