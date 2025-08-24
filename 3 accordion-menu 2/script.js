// ✅ Step 1: Select the container that holds all FAQ items
const faqSection = document.querySelector('.faq-section');

// ✅ Step 2: Add ONE single event listener on the container
faqSection.addEventListener('click', (e) => {

 // Only respond if a question-button was clicked
  if (!e.target.classList.contains('question-button')) return;

    const clickedQuestion = e.target;                 // The button clicked
    const clickedAnswer = clickedQuestion.nextElementSibling; // Its corresponding answer box
    const currentlyOpen = faqSection.querySelector('.answer-box.answer-shown');

    // ✅ Step 4: If another answer is already open and it's not the one just clicked — close it
    if (currentlyOpen && currentlyOpen !== clickedAnswer) {
      currentlyOpen.style.maxHeight = null;
      currentlyOpen.classList.remove('answer-shown');
    }

    // ✅ Step 5: Toggle the clicked question's answer
    if (clickedAnswer.classList.contains('answer-shown')) {
      // It's already open — so close it
      clickedAnswer.style.maxHeight = null;
      clickedAnswer.classList.remove('answer-shown');
    } else {
      // It's closed — so open it
      clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + 'px';
      clickedAnswer.classList.add('answer-shown');
    }
  });


// | What you're selecting  | HTML looks like               | JS selector                          |
// | ---------------------- | ----------------------------- | ------------------------------------ |
// | By ID                  | `<div id="menu">`             | `document.getElementById('menu')`    |
// | By Class               | `<div class="menu">`          | `document.querySelector('.menu')`    |
// | By Tag                 | `<button>Click</button>`      | `document.querySelector('button')`   |
// | First matching element | `<p class="info">Text</p>`    | `document.querySelector('.info')`    |
// | All matching elements  | Multiple `<li class="item">`s | `document.querySelectorAll('.item')` |
