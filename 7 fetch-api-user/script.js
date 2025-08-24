// 🔹 Get DOM elements where data will be displayed and status updates will be shown
const usersContainer = document.getElementById('users'); // Container to hold all fetched user cards
const statusText = document.getElementById('status');    // Shows loading state or error message

// 🔹 Make an API call to fetch 5 random users
// Using 'fetch()' to demonstrate asynchronous data retrieval from a REST API
fetch('https://randomuser.me/api/?results=5')

  // 🔹 First 'then': handle the raw HTTP response
  .then(response => {
    // Check if HTTP status is NOT OK (e.g., 404, 500)
    if (!response.ok) {
      // Throwing an error here will send control to the '.catch()' block
      throw new Error('❌ Network response was not OK');
    }
    // Convert raw response body to JavaScript object (JSON parsing)
    return response.json();
  })

  // 🔹 Second 'then': handle the parsed JSON data
  .then(data => {
    // Extract 'results' array from the API's JSON response
    const users = data.results;

    // Loop through each user object and create a UI card for them
    users.forEach(user => {
      // Create a wrapper div for this user's card
      const div = document.createElement('div');
      div.className = 'user-card'; // For styling

      // Use template literals to dynamically insert user data into HTML structure
      div.innerHTML = `
        <img src="${user.picture.thumbnail}" alt="User">
        <div>
          <strong>${user.name.first} ${user.name.last}</strong><br>
          ${user.email}
        </div>
      `;

      // Append the constructed card to the container
      usersContainer.appendChild(div);
    });

    // Hide the status text (since loading is done)
    statusText.style.display = 'none';
  })

  // 🔹 Catch any network, HTTP, or JSON parsing errors
  .catch(error => {
    // Display error message to user (good UX practice)
    statusText.textContent = error.message;
  })

  // 🔹 'finally' block: runs regardless of success or failure
  .finally(() => {
    // Useful for cleanup, logging, or analytics
    console.log('✅ Fetch attempt completed');
  });
