// =============================
// Current Year in Footer
// =============================

const year = new Date().getFullYear();

const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `
        © ${year} Azeez Olanrewaju Lateef. All rights reserved.
    `;
}


// =============================
// Mobile Menu Toggle
// =============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }

    });

    // Close menu after clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.querySelector("i").className = "fa-solid fa-bars";

        });

    });

}


// =============================
// Dark Mode Toggle
// =============================

const themeButton = document.querySelector(".theme-btn");

if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode")
            ? "dark"
            : "light"
        );

    });

}


// =============================
// Load Saved Theme
// =============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}