const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// 1️⃣ Load to-dos , KINDLY SEE THE SET-ITEM BELOW AND THEN COME HERE
function loadTodos() {                                            
  const todos = JSON.parse(localStorage.getItem('todos')) || []; 
  todos.forEach((text) => {
    addTodoToDOM(text);
  });
}
//1️⃣****"todos" is the name of the storage entry.
// Its value is a JSON string representing an array of strings, where each string is the text of a to-do item (like 'Buy groceries', 'Finish homework', etc.).
// When retrieved and parsed, it becomes an array like:
// ['Buy groceries', 'Finish homework', ...]

// localStorage.getItem('todos')
// This fetches the stored "todos" item from the browser’s local storage.


// 2️⃣ JSON.parse(...)
// Converts the JSON string retrieved from localStorage back into a JavaScript array.
// If nothing is stored yet (like on first visit), localStorage.getItem('todos') returns null.

// 3️⃣ || []
// This is a fallback. If parsing returns null, it uses an empty array instead. This ensures the code doesn't break if there’s nothing stored.

// 4️⃣ .forEach((text) => {...})
// Loops over each item in the todos array (which is an array of strings).
// Each string is a to-do item’s text.

// 5️⃣ addTodoToDOM(text)
// For each to-do item, calls a function that adds the to-do item into the visible list in the DOM (so users can see it).


// 2️⃣ Save to-dos array to localStorage
function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// A key — in this case 'todos' (the label to identify your data).

// A value — here, JSON.stringify(todos).


// 3️⃣ Add <li> and remove button to DOM
function addTodoToDOM(text) {
  const li = document.createElement('li'); // 📝 Create a new <li> element for the to-do item
  li.textContent = text + ' '; //Sets the visible text of the <li>  ,  plus a space (to separate the text from the remove button visually).
  
  // ➕ Create a "Remove" button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove'; // Set text inside button 
  removeBtn.style.marginLeft = '10px'; // Add space between text and button

  // 🗑️ Add click event to remove this <li> and update localStorage
  removeBtn.addEventListener('click', () => {
    li.remove(); // Remove the <li> from the DOM
    updateLocalStorage(); // Update localStorage with the new list
  });

  li.appendChild(removeBtn);  // 🔗 Add the button inside the <li>
  todoList.appendChild(li); // 📌 Add the <li> to the to-do list in the DOM
}


// 4️⃣ Update localStorage after removal
function updateLocalStorage() {
  const currentTodos = []; // 🗂️ Prepare an empty array to store current to-dos

  // 🔍 Loop through all <li> elements inside #todoList
  document.querySelectorAll('#todoList li').forEach((li) => {
    // Extract just the text (before “Remove”)
    const text = li.firstChild.textContent.trim(); 
    currentTodos.push(text);
  });
  saveTodos(currentTodos);// 💾 Save the updated list of to-dos to localStorage

//   Imagine this:
// You have a to-do list shown on the page — a list of tasks, each with a "Remove" button.

// When you click "Remove" on one task, that task disappears from the page.

// But — the browser’s localStorage still has the old full list (including the removed one)!

// So localStorage is out of sync with what you see on the page.

// What this function does:
// It looks at the current list of visible tasks on the page (the <li> items).

// It collects the text of each visible to-do (ignoring the "Remove" buttons).

// What each part means:
// li
// This is one of the <li> elements in your to-do list.

// firstChild
// This accesses the very first child node inside the <li>.
// In your case, it’s the text node containing the to-do text (like "Buy milk ").
// It does NOT include the "Remove" button because that's a separate child node.

// textContent
// This gets the actual text inside that text node.
// For example, it might be "Buy milk " (note the space at the end).

// trim()
// This removes any leading or trailing spaces from the text.
// So "Buy milk " becomes "Buy milk" without extra spaces.


}

// 5️⃣ On form submit: add to DOM & localStorage
form.addEventListener('submit', (e) => {
  e.preventDefault(); // ❌ Prevent form’s default page reload
  const text = input.value.trim(); // extrcts value from input, ✍️ Get trimmed text from input
  if (!text) return;
  addTodoToDOM(text); // When we click add-Button -> it creates <li> & remove button

  // Update localStorage with new to-do
  const stored = JSON.parse(localStorage.getItem('todos')) || []; // 📥 Get current saved to-dos or empty array
  stored.push(text); // ➕ Add new [ "to-do text" ] to array
  saveTodos(stored); // 💾 Save updated array back to localStorage

  input.value = ''; // 🔄 Clear input box for next to-do
});

// Initial load
loadTodos();


