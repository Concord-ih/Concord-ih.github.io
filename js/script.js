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

const nav = document.querySelector("nav ul");
const menuButton = document.querySelector(".menu-btn");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

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