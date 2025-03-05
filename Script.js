// Dark Mode Toggle Function
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Local Storage to Save Preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load User Preference
window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};
