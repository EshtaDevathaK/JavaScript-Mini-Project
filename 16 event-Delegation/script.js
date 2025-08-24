const fruitList = document.getElementById('fruitList'); //<ul id="fruitList"> So fruitList refers to the entire <ul> element in the HTML.
const addFruitBtn = document.getElementById('addFruit');
const output = document.getElementById('output');

// 1️⃣ Parent listener using event delegation
fruitList.addEventListener('click', function (e) {
  // e.target is the element clicked
  if (e.target && e.target.nodeName === 'LI') {// 📝 What is nodeName? nodeName property of a node object tells you the type of element that represents
    output.textContent = `You clicked on: ${e.target.textContent}`;//For a <div>, nodeName is 'DIV', For a <li>, nodeName is 'LI'.
  }
});

// 2️⃣ Dynamically add new <li> items
const fruits = ['🍍 Pineapple', '🍉 Watermelon', '🥝 Kiwi', '🍑 Peach', '🍎 Apple', '🍌 Banana', '🍇 Grape']; // Determine data 
addFruitBtn.addEventListener('click', () => { // determine , what happen on Button click
  const randomFruit = fruits[Math.floor(Math.random() * fruits.length)]; // randomFruit - dynamic apperance
  const li = document.createElement('li'); // create Li element
  li.textContent = randomFruit; // determine textContent - by putting - randomFruit - dynamic apperance - inside it
  fruitList.appendChild(li); // already we have some fruit's List new Li will append the remaing - adds up in the bottom
});



// Normally, if you want to know which toy someone picks, you’d need to ask every single toy individually:

// "Hey Pineapple, did someone touch you?"

// "Hey Watermelon, did someone touch you?"

// "Hey Kiwi, did someone touch you?"

// 🥱 That’s a lot of asking!

// But with event delegation, you can ask just the box:
// “Hey box, did someone touch one of your toys? If yes, which one?”

// And the box can reply:

// "Yes! Someone touched Pineapple!"

// "Yes! Someone touched Watermelon!"

// 🛒 In code terms:

// The box is the <ul> parent element.

// The toys are the <li> items.

// Instead of asking each toy to tell you, you ask the box — because the box knows which toy was touched.

// So, event delegation is like asking the parent box to handle all the touches instead of bothering each toy one by one!

// That’s event delegation — super simple! 🧺✨




// 🍎 The Story
// Imagine you have a big toy box called fruitList.
// Inside this toy box, you have lots of small toys (each toy is like an <li> element).

// 🧺 The Setup:
// You’re curious to know:

// “Which toy did someone touch today?”

// But instead of asking each toy individually (too tiring! 🥱),
// you decide to ask the toy box:

// “Hey toy box — did someone touch one of your toys?”

// 📝 In code:

// js
// Copy code
// fruitList.addEventListener('click', function (e) {
// This means:

// “Hey toy box, whenever someone clicks on ANY toy inside you, please let me know!”

// 🔎 What happens when a toy is touched?:
// When someone touches a toy (like 🍉), the toy box hears it thanks to event bubbling (the click floats up from the toy to the box).

// 👂 Inside the toy box’s listener:

// js
// Copy code
// if (e.target && e.target.nodeName === 'LI') {
// The toy box checks:

// “Did someone touch a toy?”

// “Was that toy actually a toy (<li>)?”

// 📣 If yes, the toy box shouts:

// “Hey! Someone touched Watermelon!”

// and writes this:

// js
// Copy code
// output.textContent = `You clicked on: ${e.target.textContent}`;
// so you know exactly which toy was touched.

// 💡 Moral of the Story:

// Instead of asking every toy individually: “Did you get touched?”

// You ask the box, and the box can tell you which toy was touched using e.target.

// So that’s what’s happening here — the toy box is using event delegation to handle all the touches on all the toys! 🧺🍉🍑✨



// 🔍 Event Delegation, Technically Explained
// Event delegation is a design pattern in JavaScript that allows us to handle events for 
// (many individual toys) multiple child elements (like <li>) by attaching a single event listener to a common (toy box - responsible for all individual Toys) parent element (like <ul>). Instead of adding a separate listener to every child, we use event bubbling to catch all events at the parent.

// 📌 Key Concepts
// ✅ Event Bubbling:
// When an event (like a click) occurs on an element, it bubbles up from the target element through its ancestors (parent, grandparent, etc.), allowing ancestor elements to listen for events on their descendants.

// ✅ Event Delegation:
// Using event bubbling to attach a single event listener to a parent element, and determine which child actually triggered the event using event.target.







 








