const btnBuild = document.getElementById('btnBuild');
const btnHighlight = document.getElementById('btnHighlight');
const btnShowParent = document.getElementById('btnShowParent');
const btnListChildren = document.getElementById('btnListChildren');
const log = document.getElementById('log');

let containerDiv; // will hold the dynamically built structure

// 1️⃣ Build nested DOM structure
btnBuild.addEventListener('click', () => {
  // Clear previous if exists
  if (containerDiv) { // 🔍 This checks if a previous container (containerDiv) exists.
    containerDiv.remove();  // ✅ If yes, it removes it from the DOM and clears any previous log text.
    log.textContent = '';
  }

  // Create a container <div>
  containerDiv = document.createElement('div');
  containerDiv.id = 'container';
  containerDiv.style.border = '1px solid #ccc';
  containerDiv.style.padding = '10px';
  containerDiv.style.marginTop = '15px';

  // Create a <ul> with <li> children , 
  // ul -> inside li -> li inside fruits -> [ul, li, fruits] everything append to containerDiv
  const ul = document.createElement('ul');
  const fruits = ['Apple', 'Banana', 'Grape', 'Orange'];

  fruits.forEach((fruit) => {
    const li = document.createElement('li');
    li.textContent = fruit;
    ul.appendChild(li);
  });

  containerDiv.appendChild(ul);
  document.body.appendChild(containerDiv); // containerDiv append to body

  log.textContent = 'Built a <div> containing a <ul> with 4 <li> items.';
});

// 2️⃣ Highlight all <li> items
btnHighlight.addEventListener('click', () => {
  if (!containerDiv) return;
  const listItems = containerDiv.querySelectorAll('li');
  log.textContent = ''; // clear previous
  listItems.forEach((li) => {
    li.style.backgroundColor = 'yellowgreen';
    li.style.padding = '5px';
    li.style.margin = '3px 0';
  });
  log.textContent = 'Highlighted all <li> items.';
});

// 3️⃣ Show each <li> parent tag
btnShowParent.addEventListener('click', () => {
  if (!containerDiv) return;
  const listItems = containerDiv.getElementsByTagName('li');
  log.textContent = ''; // clear previous
  Array.from(listItems).forEach((li, i) => { // which  converts that gadget bag (collection) into a real array.
    log.textContent += `Item ${i + 1} parent is: ${li.parentElement.tagName}\n`;
  });
});

// 4️⃣ List all direct children of containerDiv
btnListChildren.addEventListener('click', () => {
  if (!containerDiv) return;
  log.textContent = ''; // clear previous

  const ul = containerDiv.getElementsByTagName('ul'); 
  Array.from(ul).forEach((child, i) => {  //  This also correct ---->  Array.from(containerDiv.children).forEach((child, i) => {
    log.textContent += `Child ${i + 1}: <${child.tagName.toLowerCase()}>\n`;
  });
});
// --------------------------------------------------------------------------------------------
// 💡 if (!containerDiv) return;
// 👉 This is like Doraemon checking if his paper is on the table before he starts coloring.
// 🔍 containerDiv is like that paper.

// So:

// If the paper isn’t there yet (containerDiv doesn’t exist)
// ➡️ Doraemon stops and does nothing (return).

// If the paper is there, he goes ahead and colors on it.
// --------------------------------------------------------------------------------------------
// 2️⃣ Array.from(listItems).forEach((li, i) => {
// 👉 What it means:

// listItems is a collection of DOM elements (like <li> tags).

// But collections aren’t real arrays in JavaScript!
// They’re like Doraemon’s gadget bag — you can grab things out of it, 
// ****but you can’t run array methods like .forEach() directly.

// So Doraemon uses a magic spell:

// javascript
// Copy code
// Array.from(listItems)
// --------------------------------------------------------------------------------------------

// 🟥 Part 1: Button Click

// javascript
// Copy code
// btnBuild.addEventListener('click', () => {
// 👉 Imagine Doraemon pressing a magical button with his paw. This is like saying:
// “Hey! When this button is clicked, let’s begin our Crayon Adventure!”

// 🟧 Part 2: Clear Old Drawing

// javascript
// Copy code
// if (containerDiv) {
//   containerDiv.remove();
//   log.textContent = '';
// }
// 👉 Imagine Doraemon erasing his old drawing with a giant eraser so that he can start fresh.
// “If there’s an old drawing (containerDiv), let’s wipe it away and also clear the log.”

// 🟨 Part 3: Create a Container

// javascript
// Copy code
// containerDiv = document.createElement('div');
// containerDiv.id = 'container';
// containerDiv.style.border = '1px solid #ccc';
// containerDiv.style.padding = '10px';
// containerDiv.style.marginTop = '15px';
// 👉 Doraemon takes a big white sheet of paper (containerDiv) and draws a neat border with his crayon:

// Adds a gray border

// Draws a comfy padding

// Leaves a space above (margin-top).

// 🟩 Part 4: Get the List Ready

// javascript
// Copy code
// const ul = document.createElement('ul');
// const fruits = ['Apple', 'Banana', 'Grape', 'Orange'];
// 👉 Doraemon then picks a new crayon color and draws a big box for a fruit list. 🍎🍌🍇🍊
// He’s got his list of fruits ready for coloring.

// 🟦 Part 5: Draw the Fruits

// javascript
// Copy code
// fruits.forEach((fruit) => {
//   const li = document.createElement('li');
//   li.textContent = fruit;
//   ul.appendChild(li);
// });
// 👉 Doraemon now draws each fruit:

// For every fruit in the list, he carefully writes its name on a sticky note (li),

// Then sticks it onto the big box (ul).

// 🟪 Part 6: Attach Everything

// javascript
// Copy code
// containerDiv.appendChild(ul);
// document.body.appendChild(containerDiv);
// 👉 Doraemon tapes the fruit box (ul) onto his white paper (containerDiv),
// and then pins the whole paper on the wall (document.body). 🖼️✨