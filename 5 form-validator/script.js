const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// ✅ Validate each field
function validateField(input, message, testFn) {
  const errorMsg = input.nextElementSibling;

  if (!testFn(input.value)) {
    input.classList.add('invalid');
    errorMsg.textContent = message;
    return false;
  } else {
    input.classList.remove('invalid');
    errorMsg.textContent = '';
    return true;
  }
}

// 📌 On submit
form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop form from submitting

  const isNameValid = validateField(nameInput, 'Name is required', val => val.trim() !== '');
  const isEmailValid = validateField(emailInput, 'Invalid email format', val =>
    /^\S+@\S+\.\S+$/.test(val)
  );
  const isPasswordValid = validateField(passwordInput, 'Password must be at least 6 characters', val =>
    val.length >= 6
  );

  if (isNameValid && isEmailValid && isPasswordValid) {
    alert('✅ Form submitted successfully!');
    form.reset();
  }
});

// ✨ Bonus: Real-time validation
[nameInput, emailInput, passwordInput].forEach(input => {
  input.addEventListener('input', () => {
    form.dispatchEvent(new Event('submit', { cancelable: true })); // run validations again
  });
});
