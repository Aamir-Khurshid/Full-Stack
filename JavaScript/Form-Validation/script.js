const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default submission

    // Reset errors
    emailError.style.display = "none";
    passError.style.display = "none";

    let valid = true;

    // Email regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Email is incorrect";
        emailError.style.display = "block";
        valid = false;
    }

    // Password regex: min 8 chars, at least 1 uppercase, 1 lowercase, 1 number, 1 special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password.value)) {
        passError.textContent = "Password is incorrect";
        passError.style.display = "block";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        // form.submit(); // Uncomment to actually submit
    }
});