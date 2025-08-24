// ✅ CREATES A COUNTER-MAKER — like a machine that builds new counters
function createCounter() {
  let count = 0; // 🛡️ PRIVATE STORAGE — only accessible inside this function

  // 🔁 Returns an inner function that remembers and uses `count` // This part of Function is called closure
  return function () {
    count++;          // ➕ Increase private count
    return count;     // 🔙 Give current value back
  };
}

// ✅ SPAWN TWO INDEPENDENT COUNTERS — like two sealed boxes
const counter1 = createCounter(); // 🧱 Has its own `count = 0`
const counter2 = createCounter(); // 🧱 Another separate `count = 0`

// ✅ CONNECT TO HTML ELEMENTS (like plugging wires into a dashboard)
const btn1 = document.getElementById('btnCounter1'); // 🔘 Button for Counter 1
const display1 = document.getElementById('display1'); // 📺 Display 1 output
const btn2 = document.getElementById('btnCounter2'); // 🔘 Button for Counter 2
const display2 = document.getElementById('display2'); // 📺 Display 2 output

// ✅ EVENT → ACTION → UPDATE — When clicked, increase & show count
btn1.addEventListener('click', () => {
  display1.textContent = counter1(); // 📈 Increment & show Counter 1's count
});

btn2.addEventListener('click', () => {
  display2.textContent = counter2(); // 📈 Increment & show Counter 2's count
});


// 📝 ***A clearer explanation:
  // 🔁 Returns an inner function that remembers and uses `count` // This part of Function is called closure
  // return function () {
  //   count++;          // ➕ Increase private count
  //   return count;     // 🔙 Give current value back
  // };
// When we do:

// const counter1 = createCounter();
// The counter1 function closes over the count variable inside createCounter() — and keeps it alive in memory.