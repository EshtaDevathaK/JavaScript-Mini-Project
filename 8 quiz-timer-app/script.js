// ✅ QUIZ DATA STRUCTURE — The Soul of the Game!
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Paris" // ✅ Only this is correct!
  },
  {
    question: "What is 5 + 3?",
    options: ["6", "8", "9", "7"],
    answer: "8"
  },
  {
    question: "What color is the sky?",
    options: ["Green", "Blue", "Red", "Yellow"],
    answer: "Blue"
  }
];

// ✅ DOM CONNECTIONS — Wiring the Brains to the Body!
const question = document.getElementById('question');     // 🧠 Display zone for question
const options = document.getElementById('options');       // 🎯 Place where answer buttons appear
const timerDisplay = document.getElementById('timer');           // ⏳ Countdown label
const resultBox = document.getElementById('resultBox');     // 📦 Final result section
const scoreDisplay = document.getElementById('scoreDisplay'); // 🧾 Final score goes here

// ✅ STATE VARIABLES — Real-Time Trackers!
let current = 0;   // 🔢 Where are we? (Question index)
let score = 0;     // 🏆 Points earned so far
let timerTracker;         // ⌛ Holds the timer's ID (important to stop it!)

// ✅ QUESTION DISPLAY ENGINE
function showQuestion(index) {
  const q = quizData[index]; // 🔍 Pull current question
  question.textContent = `Q${index + 1}. ${q.question}`; // 🖊 Show with number
  options.innerHTML = ''; // ♻️ Clear old buttons!

  // 🧪 Create 4 answer buttons dynamically
  q.options.forEach(opt => {
    const btn = document.createElement('button'); // 🔘 New button
    btn.textContent = opt;                        // 🏷 Set label
    btn.onclick = () => checkAnswer(opt);         // 🔗 Hook: What happens if clicked?
    options.appendChild(btn);                   // 📌 Push into options box
  });

  startTimer(); // ⏱ Every question starts with a fresh clock!
}

// ✅ ANSWER CHECK + PROGRESS FLOW
function checkAnswer(selected) {
  clearInterval(timerTracker); // ❌ Stop timer immediately after choosing
  if (selected === quizData[current].answer) {
    score++;            // ✅ Award 1 point
  }
  nextQuestion();       // 🧭 Move to the next!
}

// ✅ TIMER SYSTEM — Life Per Question
function startTimer() {
  let time = 10; // ⏳ You get 10 seconds per question!
  timerDisplay.textContent = `⏳ ${time}`; // 🖊 Initial time on screen

  // 🎡 Every second, reduce timer
  timerTracker = setInterval(() => {
    time--;
    timerDisplay.textContent = `⏳ ${time}`; // 🖊 Update time visibly

    if (time === 0) {
      clearInterval(timerTracker); // ❌ Stop the countdown
      nextQuestion();       // ⏭ Time up = auto move!
    }
  }, 1000); // 🔁 Run every 1 second
}

// ✅ PROCEED TO NEXT STEP!
function nextQuestion() {
  current++; // ⬆️ Move index
  if (current < quizData.length) {
    showQuestion(current); // 📥 Load next
  } else {
    showResult(); // 🛑 No more left = show final
  }
}

// ✅ RESULT DISPLAY — The Final Curtain
function showResult() {
  document.getElementById('quizBox').style.display = 'none'; // 🎭 Hide quiz stage
  resultBox.style.display = 'block';                         // 🎬 Show result box
  scoreDisplay.textContent = `Your Score: ${score} / ${quizData.length}`; // 🧾 Show final points
}

// ✅ STARTER TRIGGER — First Question Autoload!
showQuestion(current); // 🚀 Launch the quiz with question 0



// Why Only Clear Options, Not Question?
// 1. Question field

// Overwritten every time:

// question.textContent = `Q${index + 1}. ${q.question}`;
// No “stacking” risk → only one question line exists → old question is replaced automatically.

// 2. Options field

// Appends new <button> elements dynamically:

// options.appendChild(btn);
// Without innerHTML = '', new buttons stack under old ones → causes duplicates.

// 3. Key Difference:

// Question = single text node → replaced in-place.

// Options = multiple elements → must clear container before adding new ones.