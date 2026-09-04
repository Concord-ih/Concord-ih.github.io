// Display current year in the footer
const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `&copy; ${year} Azeez Olanrewaju Lateef. All rights reserved.`;
}


// Highlight active navigation link
const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.style.color = "#38bdf8";
        link.style.fontWeight = "bold";
    }
});