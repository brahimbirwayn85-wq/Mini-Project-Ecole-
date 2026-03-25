document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const togglePasswordButton = document.getElementById("togglePassword");

    if (!passwordInput || !togglePasswordButton) {
        return;
    }

    togglePasswordButton.addEventListener("click", () => {
        const isHidden = passwordInput.type === "password";

        passwordInput.type = isHidden ? "text" : "password";
        togglePasswordButton.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
        togglePasswordButton.setAttribute("aria-pressed", String(isHidden));
    });
});
