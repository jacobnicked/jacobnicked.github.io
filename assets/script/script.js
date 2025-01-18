//Menu for mobile
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

//Current year
function currentYear() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
}

    document.addEventListener('DOMContentLoaded', currentYear);