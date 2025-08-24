// Step 1: Select all FAQ question buttons
const questions = document.querySelectorAll('.question-button');

// Step 2: Loop through each question button and add a click event
questions.forEach(question => {
  question.addEventListener('click', () => {

    // Step 3: Check if any answer is currently open (has 'answer-shown' class)
    const currentlyOpen = document.querySelector('.answer-box.answer-shown');

    // Step 4: Find the answer box just below the clicked question
    const answer = question.nextElementSibling;

    // ===========================
    // 🔍 First IF block:
    // If there IS an answer already open (currentlyOpen),
    // AND it's NOT the one related to the question we just clicked,
    // then close that previously open one.
    //
    // ✅ For example:
    //   - You clicked Question 1 → its Answer 1 opened
    //   - Then you clicked Question 2
    //   - This condition finds that Answer 1 is open and not the same as Answer 2
    //   - So it closes Answer 1
    // ===========================



    // so technically This finds The previous Question Opened -  by checking if the Previous QUestion Has -> .answer-shown
    // This Comes to The conclusion By -> ***=> Previous-Open-Finder in The second if else condition , which helpf to fit .answer-shown class to the prev-Question we Open 
    // And helps differentiate from The current Question
    if (currentlyOpen && currentlyOpen !== answer) {
      currentlyOpen.style.maxHeight = null;            // Collapse the previous answer
      currentlyOpen.classList.remove('answer-shown');  // Remove the label/marker
    }

    // ===========================
    // 🔄 Second IF block:
    // Now check if the clicked question's own answer is already open.
    //
    // ✅ If YES:
    //   - That means the user clicked the **same question again**
    //   - So we simply close it (toggle behavior)
    //
    // ✅ If NO (i.e. it’s closed):
    //   - Then we open it in the ELSE block below
    // ===========================
    if (answer.classList.contains('answer-shown')) {
      answer.style.maxHeight = null;                   // Collapse current answer
      answer.classList.remove('answer-shown');         // Remove label
    } else { // I name it ****=>Previous-Open-Finder
      answer.style.maxHeight = answer.scrollHeight + 'px'; // Expand it to fit content
      answer.classList.add('answer-shown');                 // Add label
    }

  });
});






// Perfect — let’s keep it **super clear, curated, and straight**, just as you asked. Here's the **exact breakdown** of:

// ---

// ### ✅ What is `.style.maxHeight = null;` doing?

// This **removes any inline max-height** that was previously set.

// * 🔧 It means: “Don’t force any specific height.”
// * 🎯 Purpose: This **collapses** the answer box smoothly **back to 0 height** (if your CSS supports transition).

// ```js
// answer.style.maxHeight = null;
// ```

// → Simply removes the height rule and lets it collapse.

// ---

// ### ✅ What is `.scrollHeight`?

// `.scrollHeight` is a **read-only property** that tells you:

// > “How tall the content inside this element really is — even if it’s currently hidden.”

// So even if the answer is collapsed (`height = 0`), this gives you the **full height the box needs** to fully show all the content.

// ---

// ### ✅ What is this doing?

// ```js
// answer.style.maxHeight = answer.scrollHeight + 'px';
// ```

// 💡 This is the **key trick** to smoothly expand the box:

// * It reads: “Get the real full height (scrollHeight) of the answer box”
// * Then it sets that height as a `max-height` inline style
// * This allows a **CSS transition** to animate the expansion

// ✅ So visually:

// * Box starts at `max-height: 0` (closed)
// * You click → set `max-height = scrollHeight px`
// * Box expands to exactly the right size

// ---

// ### 🧠 Final Visual Flow Summary:

// | Action             | Code                                                   | What it Does                                  |
// | ------------------ | ------------------------------------------------------ | --------------------------------------------- |
// | 🔽 Collapse answer | `answer.style.maxHeight = null;`                       | Closes the box                                |
// | 🔼 Expand answer   | `answer.style.maxHeight = answer.scrollHeight + 'px';` | Opens the box smoothly to full content height |

// ---

// Let me know if you want a mini-visual or CSS animation part too.
