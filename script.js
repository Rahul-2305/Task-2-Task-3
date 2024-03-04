function validateForm() {
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var errorMessage = document.getElementById("error-message");

  // Regular expressions for validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]*$/;

  // Check if the username (email) matches the email format
  if (!emailRegex.test(usernameInput.value)) {
    errorMessage.innerHTML = "Please enter a valid email address.";
    errorMessage.style.display = "block";
    return false; // Prevent form submission
  }

  // Check if the password matches the criteria
  if (!passwordRegex.test(passwordInput.value)) {
    errorMessage.innerHTML =
      "Password must contain at least one uppercase letter, one number, and only @ as special character.";
    errorMessage.style.display = "block";
    return false; // Prevent form submission
  }

  // Check if the password is correct for redirection
  if (passwordInput.value !== "ZenTradesTest@123") {
    errorMessage.innerHTML = "Incorrect password. Please try again.";
    errorMessage.style.display = "block";
    return false; // Prevent form submission
  }

  // If all validations pass, redirect to dashboard page
  window.location.href = "dashboard.html";
  return false; // Prevent form submission
}
