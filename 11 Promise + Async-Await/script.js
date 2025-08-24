const btnPromise = document.getElementById('btnPromise');
const btnAsync = document.getElementById('btnAsync');
const output = document.getElementById('output');

const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

// 1️⃣ Using Promise chaining (.then/.catch)
function fetchWithPromise() {
  output.textContent = 'Loading with .then()...';

  fetch(API_URL)// Step 1: Fetch data from API  // response is a Response object—it has data about the HTTP response.
    .then((response) => {// when the fetch Promise finishes ,  (when the network is done), call this function and pass the result to it."
      if (!response.ok) {//This checks if the HTTP status was successful. response.ok is a boolean (true or false).
        throw new Error('Network response not OK');
      }
      return response.json(); // It extracts JSON data from the response.
    })
    .then((data) => {
      output.textContent = JSON.stringify(data, null, 2);//JSON.stringify(value, replacer, space)
    })
    .catch((error) => { 
      output.textContent = `Promise error: ${error.message}`;
    });
}

// 2️⃣ Using async/await
async function fetchWithAsync() {
  output.textContent = 'Loading with async/await...';
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
//       ✅ Yes! — Error is actually a class (technically, a constructor function that works like a class).
// 👉 It’s built into JavaScript to represent runtime errors 
      throw new Error('Network response not OK'); // means some problem with link
    }
    const data = await response.json();
    console.log("This is an Raw Object Look -> response.json()",data);
    output.textContent = JSON.stringify(data, null, 2); // change it into Human readable format 
  } catch (error) {
    output.textContent = `Async/await error: ${error.message}`;
  }
}

btnPromise.addEventListener('click', fetchWithPromise);
btnAsync.addEventListener('click', fetchWithAsync);


// 🔑 TL;DR:
// data: The data object you want to print.

// null: Means “don’t filter any properties.”

// 2: Adds pretty indentation with 2 spaces for readability.


