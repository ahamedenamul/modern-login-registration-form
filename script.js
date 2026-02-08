// Select html elements
const showhidePassword = document.querySelector('.showhide-password');
const signUpBtn = document.querySelector('.sign-up-btn');
const signInBtn = document.querySelector('.sign-in-btn');
const title = document.querySelector('.title');
const underline = document.querySelector('.underline');
const dynamicText = document.querySelector('.dynamic-text');


// Show and hide password
showhidePassword.addEventListener("click", function() {
    const passwordInput = this.previousElementSibling;
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    }
});

// Sign up and sign in button click events
signUpBtn.addEventListener("click", function() {
    const usernameField = document.querySelector('.username-field');
    usernameField.classList.remove('is-hidden');
    title.textContent = "Sign Up";
    underline.style.transform = "translateX(-14px)";
    underline.style.background = "linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 100%)";
    dynamicText.textContent = "Password Suggestions?";
    signUpBtn.classList.add('btnInactive');
    signInBtn.classList.remove('btnInactive');
});

signInBtn.addEventListener("click", function() {
    const usernameField = document.querySelector('.username-field');
    usernameField.classList.add('is-hidden');
    title.textContent = "Sign In";
    underline.style.transform = "translateX(10px)";
    underline.style.background = "linear-gradient(90deg, var(--accent-2) 0%, var(--accent) 100%)";
    dynamicText.textContent = "Forgot Password?";
    signInBtn.classList.add('btnInactive');
    signUpBtn.classList.remove('btnInactive');
});
