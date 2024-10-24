AOS.init({
    duration: 1000,
    once: true
});

function toggleMode() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const targetTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", targetTheme);

    const modeToggleIcon = document.querySelector('.mode-toggle i');
    if (targetTheme === "dark") {
        modeToggleIcon.classList.remove('fa-moon');
        modeToggleIcon.classList.add('fa-sun');
    } else {
        modeToggleIcon.classList.remove('fa-sun');
        modeToggleIcon.classList.add('fa-moon');
    }
}
