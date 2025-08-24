// Select the form element using its ID
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the form from submitting (so we can validate first)
  
    // Get values entered by the user and remove extra spaces
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Select the element where we'll show error or success messages
    const errorMessages = document.getElementById('errorMessages');
  
    // Create an empty array to store any error messages
    let errors = [];
  
    // --- Name Validation ---
    if (name === '') {
      errors.push("Name is required.");
    }
  
    // --- Email Validation (basic check without regex) --- Condition True Then Show Error :
    if (!email.includes('@') || !email.includes('.')) {//any one condition is True Then show error :
      errors.push("Please enter a valid email address.");
    }
  
    // --- Password Validation ---
    if (password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    } else if (!hasLetter(password) || !hasNumber(password)) { //any one condition is True Then show error  :
      errors.push("Password must contain both letters and numbers.");
    }
  
    // --- Confirm Password Check ---
    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }
  
    // --- Show Errors or Success Message ---
    if (errors.length > 0) {
      // Join all error messages with a line break and show them
      errorMessages.style.color = 'red';
      errorMessages.innerHTML = errors.join("<br>");
    } else {
      // Show success message
      errorMessages.style.color = 'green';
      errorMessages.innerHTML = "Registration successful! 🎉";
  
      // Optionally: you could submit the form or send data via fetch/ajax
     // After Registration -> button clicked page Refreshed 
    // and input values becomes -> empty - comes to become default Position...
      document.getElementById('registrationForm').reset();
    }

  });
  
  
// --- Helper Function: Check if password has at least one letter ---
//   if we put numbers or alpha numeric then ch.toLowerCase() === ch.toUpperCase()  
// lowercase and Uppercase will be equal cause it cannot change
  function hasLetter(str) {
    for (let ch of str) {
      if (ch.toLowerCase() !== ch.toUpperCase()) { // because only letters change between lowercase and uppercase.
        return true; // Letter found
      }
    }
    return false; // No letter found
  }
  
  // --- Helper Function: Check if password has at least one number ---
  function hasNumber(str) {
    for (let ch of str) {
      if (!isNaN(ch) && ch !== ' ') {
        return true; // Number found
      }
    }
    return false; // No number found
  }
//   ✅ Explanation isNaN(ch) :
// Part	Meaning
// isNan(ch) -> Number ah illa apdina True return Pannum 
// !isNan(ch) -> Number ***123 apdina True return Pannum ( !flips things... )


 
// Explanation :


// 💡 So why we use e.preventDefault()?
// ✅ What is the "default action"?
// Normally, when you click a submit button on a form :

// 🧠 The browser immediately reloads the page or sends the form data to the server (if there’s an action URL).

// But we don’t want that yet.
// We want to check the user's inputs first — to make sure:

// name is filled

// email is valid

// passwords match

// etc.

// 💡 So why we use e.preventDefault()?
// Because:

// 🛑 It stops the form from being submitted immediately, so we can run our own validation code first.

// 🧪 After validation:
// If the data is correct → you can show "Success" or submit using JavaScript (like AJAX).

// If there are errors → you can show error messages without reloading the page.




// 🔧 Breakdown:
// Case 1 – Email = abcgmail.com
// email.includes('@') → false

// !email.includes('@') → true

// email.includes('.') → true

// !email.includes('.') → false

// true || false → ✅ true → Error shown

// Case 2 – Email = abc@gmailcom
// @ is present → false

// . is missing → true

// false || true → ✅ true → Error shown

// Case 3 – Email = abc@gmail.com
// @ is present → false

// . is present → false

// false || false → ❌ false → No error









// if (email.includes('@') || email.includes('.'))-----> No Exclamatory Mark !!! ❌
//     This means:
    
//     “If email has @ OR ., then show an error.”
    
//     ❌ Why this is wrong for validation:
//     We want to show an error when the email is invalid, i.e., missing either one.
    
//     But here you're saying:
    
//     “If the email has even one of @ or ., show error.”
    
//     That means even partially correct emails 
//     (like abc@gmailcom or abcgmail.com) would still trigger errors incorrectly — 
//     or worse, valid emails like abc@gmail.com will still show errors depending on how you write the rest.

