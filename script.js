//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingUserButton = document.getElementById("existing");

    // Check if credentials exist in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingUserButton.style.display = "block"; // Show "Login as existing user"
    }

    // Handle form submission
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const rememberMe = rememberMeCheckbox.checked;

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        alert(`Logged in as ${username}`);

        if (rememberMe) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
        
        existingUserButton.style.display = rememberMe ? "block" : "none";
    });

    // Handle login as existing user
    existingUserButton.addEventListener("click", function () {
        alert(`Logged in as ${savedUsername}`);
    });
});
