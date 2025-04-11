//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("checkbox");
    const loginForm = document.getElementById("loginForm");
    const existingUserButton = document.getElementById("existing");

    // Check if credentials exist in local storage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingUserButton.style.display = "block"; // Show "Login as existing user" button
    }

    // Handle form submission
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (rememberCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    });

    // Login as existing user
    existingUserButton.addEventListener("click", () => {
        alert(`Logged in as ${savedUsername}`);
    });
});
