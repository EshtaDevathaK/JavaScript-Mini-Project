// ✅ Get the UL list element by its ID
const list = document.getElementById('draggableList');

// ✅ We'll store the item being dragged in this variable
let draggedItem = null;

// ✅ When dragging starts on any list item
list.addEventListener('dragstart', e => {
  draggedItem = e.target; // Save the dragged element
  setTimeout(() => {
    e.target.style.display = 'none'; // Hide it visually during drag (optional but smooth)
  }, 0); // Runs just after the current event loop
});






// ### 🔚 What is `dragend`?
// Alright, straight to the point 💡—
// You're asking what exactly this part does:

// ```js
// list.addEventListener('dragend', e => {
//   e.target.style.display = 'block';
//   draggedItem = null;
// });
// ```

// ---

// ### 🔚 What is `dragend`?

// **`dragend`** fires **no matter what happens** to the dragged item:

// * ✅ if you successfully **drop** it on a valid target
// * ❌ or if you **cancel** the drag (like dropping outside any drop zone)

// So it's like the **cleanup moment** when dragging is over.

// ---

// ### 🧹 What this code does:

// ```js
// e.target.style.display = 'block';
// ```

// ➡️ Shows the item again because earlier in `dragstart`, you did:

// ```js
// e.target.style.display = 'none'; // hide while dragging
// ```

// ```js
// draggedItem = null;
// ```

// ➡️ You clear the memory of what item was being dragged.
// It's like putting down the box and emptying your hands.

// ---

// ### 👧🏼 Aditi's Voice (your style):

// > "Okay, you just dropped the potato — whether it landed on a plate or fell on the floor, doesn't matter — now you stop hiding it, clean your hand, and say 'I'm done'."

// ---

// ✅ **Conclusion:**
// `dragend` = End of dragging, clean up visuals and memory.
// It doesn’t mean you *dropped* it on something — just that dragging is **over**.

// Let me know if you want a mini animation diagram of this.

// ✅ When dragging ends (item is dropped or canceled)
list.addEventListener('dragend', e => {
  // e.target - picked Item
  e.target.style.display = 'block'; // Show the item back

  draggedItem = null; // Reset the dragged item variable
}); 



// ✅ While dragging over other list items
list.addEventListener('dragover', e => {
  e.preventDefault(); // Allow dropping here (default is false!)
  //Dragging apple over corn, e.target here is - corn.
  const target = e.target;

  // ✅ Only highlight LI items and skip the one we're dragging
  if (target.tagName === 'LI' && target !== draggedItem) {
    target.classList.add('drag-over'); // Add highlight style while hovering
  }
});

// ✅ When the dragged item leaves a list item area
list.addEventListener('dragleave', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.remove('drag-over'); // Remove the hover style
  }
});

// ✅ When the item is dropped onto another item
list.addEventListener('drop', e => {
  e.preventDefault(); // Prevent default browser behavior
  const target = e.target;

  // ✅ Only drop on LI and not on itself
  if (target.tagName === 'LI' && target !== draggedItem) {
    target.classList.remove('drag-over'); // Remove hover effect

    // ✅ Find out where inside the LI we dropped: top half or bottom half
    const rect = target.getBoundingClientRect(); // Get size and position
    const offset = e.clientY - rect.top; // Get vertical drop position

    // ✅ If dropped in top half → insert before
    if (offset < rect.height / 2) {
      list.insertBefore(draggedItem, target);
    } 
    // ✅ If dropped in bottom half → insert after
    else {
      list.insertBefore(draggedItem, target.nextSibling);
    }
  }
});


// Yes, Eshta — you've described **two super key behaviors** that happen during drag-and-drop reordering. Let's name and clearly explain both of them, and **exactly which part of the code controls them**, and **why it works that way** — using your fruits example:

// ---

// ## 🍇 Your Setup:

// ```plaintext
// 1. 🍎 Apple  
// 2. 🍌 Banana  
// 3. 🍇 Grape ← You picked this up  
// 4. 🍍 Pineapple  
// 5. 🍉 Watermelon
// ```

// ---

// ### 🔍 YOUR OBSERVATION 1:

// > 📌 When I picked up 🍇 Grape (3rd one), suddenly 🍍 Pineapple moved up just **below 🍌 Banana** (skipping 🍇 Grape like it was invisible).
// > It felt like Grape “left the list” and the others “closed the gap”.

// ---

// ### ✅ WHO DOES THIS?

// ### → This is controlled by **this part** of the code in `dragstart`:

// ```js
// e.target.style.display = 'none';
// ```

// ### ✅ What does this do?

// * When you **start dragging** Grape 🍇, it **temporarily hides** it from the list visually.
// * So now the browser sees only:

// ```plaintext
// 1. 🍎 Apple  
// 2. 🍌 Banana  
// 3. 🍍 Pineapple  
// 4. 🍉 Watermelon
// ```

// * That’s why 🍍 Pineapple slides up — to **fill the space** left by 🍇 Grape.

// ---

// ### ✨ Hidden Detail:

// Even though 🍇 Grape is visually gone (`display: none`), it's still held in memory in `draggedItem`, waiting to be dropped somewhere.

// ---

// ### 🔍 YOUR OBSERVATION 2:

// > 📌 While dragging 🍇 Grape, whenever I hover over any other fruit (e.g., 🍉 Watermelon), that hovered item gets a **blue border or background**. But 🍇 Grape is always faded and doesn’t highlight like that.

// ---

// ### ✅ WHO DOES THIS?

// ### → This is handled in `dragover` and `dragleave`:

// ```js
// // When hovering over a valid list item
// list.addEventListener('dragover', e => {
//   e.preventDefault();
//   const draggingOverItem = e.target;
//   if (draggingOverItem.tagName === 'LI' && draggingOverItem !== draggedItem) {
//     draggingOverItem.classList.add('drag-over');
//   }
// });

// // When leaving a list item
// list.addEventListener('dragleave', e => {
//   if (e.target.tagName === 'LI') {
//     e.target.classList.remove('drag-over');
//   }
// });
// ```

// ---

// ### ✅ What do these do?

// * When your dragged item (🍇 Grape) **hovers over another item** (e.g., 🍌 Banana, 🍉 Watermelon):

//   * That item gets a `.drag-over` class, which usually has CSS like:

//     ```css
//     .drag-over {
//       background-color: lightblue;
//       border: 2px dashed #007BFF;
//     }
//     ```

//   * This shows the blue highlight you noticed.

// * It **skips highlighting** the actual dragged item (`draggedItem`) — so 🍇 Grape is left **faded** (`display: none` still applies).

// ---

// ## ✅ Putting it Together:

// | Behavior                                  | Code That Handles It                              | Why It Works                                                |
// | ----------------------------------------- | ------------------------------------------------- | ----------------------------------------------------------- |
// | 🍇 Grape vanishes, 🍍 Pineapple slides up | `e.target.style.display = 'none';` in `dragstart` | Makes dragged item invisible → browser reflows the list     |
// | Highlight blue border on hovered items    | `.classList.add('drag-over')` in `dragover`       | Adds visual highlight to any item you’re about to drop onto |
// | Faded dragged item                        | Still hidden via `display: none` until `dragend`  | Dragged item is never shown in the list while dragging      |

// ---

// ## 🧠 Aditi’s Tip to Remember:

// > 🔁 **DragStart** = hide the item
// > 🧲 **DragOver** = highlight the item being hovered
// > 👋 **DragLeave** = remove the highlight
// > ✅ **Drop** = move the dragged item here
// > 🧼 **DragEnd** = show the item back + clean up

// ---

// If you want, I can **visually simulate this with animation flow**, showing how the DOM restructures with each action (like a cartoon of what’s happening inside the browser). Let me know and I’ll build it.













// Great question, Eshta! This is **super important** when building intelligent drag-and-drop behavior like inserting items **above or below** another item based on the **mouse position**.

// Let’s break it down like a **live animated story** ✨.

// ---

// ## 🔎 What is `e.clientY`?

// ```js
// const mouseY = e.clientY;
// ```

// * `e` = the **MouseEvent** triggered when you're dragging.
// * `clientY` = the **vertical (Y-axis)** position of your mouse **within the visible viewport** (excluding scroll).

// 📌 It's like saying:

// > “How far down is my mouse pointer from the top of the screen?”

// 📍 Example:

// If your screen looks like this:

// ```
// ---------------------------- (top of browser)
// Y=0 px
// 🖱️ ← e.clientY = 250
// ...
// ---------------------------- (bottom)
// ```

// So, `e.clientY = 250` means your mouse is **250px from the top of the screen**.

// ---

// ## 🔎 What is `rect.top`?

// ```js
// const rect = e.target.getBoundingClientRect();
// ```

// * `rect.top` is the **Y-position** (distance from top of screen) where the **target element (like an `<li>`) starts**.

// 📌 So if `bananaLI.getBoundingClientRect().top = 220`, it means:

// > “🍌 Banana starts 220px from the top of the screen.”

// ---

// ## ✨ Putting It Together: `e.clientY < rect.top + rect.height / 2`

// ```js
// if (e.clientY < rect.top + rect.height / 2) {
//   // Insert before
// } else {
//   // Insert after
// }
// ```

// ### 🎯 What's happening here?

// You're comparing:

// * `e.clientY` → 🖱️ Your current mouse Y position
// * `rect.top + rect.height / 2` → 🧱 Midpoint of the `<li>` being hovered

// ---

// ### 📦 Real Example:

// Suppose you are hovering over:

// 🍌 Banana → Y starts at 200px, height is 40px

// ```js
// rect.top = 200
// rect.height = 40
// rect.top + rect.height/2 = 200 + 20 = 220
// ```

// Now your mouse is at `e.clientY = 215`

// 👉 So `215 < 220` → TRUE → **insert before banana**

// But if `e.clientY = 225`

// 👉 `225 < 220` → FALSE → **insert after banana**

// ---

// ## 🧠 Visual:

// ```
// 🍌 Banana (Y=200 to 240)

// ┌───────────────┐
// │    Banana     │
// ├───────────────┤ ← midpoint (Y=220)
// │               │
// └───────────────┘

// Mouse 🖱️ Y=215 → before
// Mouse 🖱️ Y=225 → after
// ```

// ---

// ## 🧩 Summary Table

// | Term                       | Meaning                                     | Example  |
// | -------------------------- | ------------------------------------------- | -------- |
// | `e.clientY`                | Mouse Y position (from top of screen)       | `215` px |
// | `rect.top`                 | Y position of the top of the hovered `<li>` | `200` px |
// | `rect.height`              | Height of the hovered `<li>`                | `40` px  |
// | `rect.top + rect.height/2` | Midpoint of the hovered item                | `220` px |

// ---

// Let me know if you'd like a cartoon or visual animation of how this behaves during drag events — happy to draw it!
