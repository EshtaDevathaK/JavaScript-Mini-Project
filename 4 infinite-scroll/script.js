const content = document.getElementById('content');
const loading = document.getElementById('loading');

let count = 0; // to keep track of items

// 🚀 Function to load 10 new items
function loadMoreItems() {
  loading.style.display = 'block';

  setTimeout(() => {
    for (let i = 0; i < 10; i++) { // 10 items shown on a single scroll
      const div = document.createElement('div');
      div.className = 'item';
      div.textContent = `📦 Item ${++count}`; //uses that incremented value immediately in the template string,   first increments then displays, doesn't care about previous count based
      content.appendChild(div);
    }

    loading.style.display = 'none';
  }, 500); // simulate loading delay
}


// ✅ Initial items
loadMoreItems();

// 👇 Scroll listener
window.addEventListener('scroll', () => {
  const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
  // bottom la irunthu 50px thaandichuna mean by greatering form bottom : 30px then please take the scrollBottom
  if (scrollBottom) { // Above condition true aachuna mattum data load aagum
    loadMoreItems();
  }
});

// ✅ **`i < 10`** — You want exactly **10 items**, so the loop runs from `i = 0` to `i = 9` (10 times total). That’s why `i < 10`.

// ✅ **`++count` vs `count++`** — You want the item **number to appear immediately** while creating it.

// * `++count` means: **increment first**, then use.
// * `count++` would use **old number first**, then increment.

// That’s why we use `++count` — to show 📦 Item 1, 2, 3, ... correctly.

// Straight to the point. ✅


// Viewport height = The part of the page you can see right now without scrolling.

// Total page height = The height of everything on the page (what you see + what’s hidden below).





// ### **1. `document.body.offsetHeight`**

// Offset height means **the complete page height**.
// From the very top to the very bottom, everything is covered.
// Every side, every direction — no matter where I am on the page — it covers the **full page height**.

// ---

// ### **2. `window.innerHeight`**

// This is **just the visible part** — the visible slice of the page.
// It **doesn’t care** whether it’s the top, middle, or bottom of the page.
// It only cares about what I can see **inside my laptop screen** at one single time.
// At one time → only the things currently seen in my **laptop screen** are counted.

// ---

// ### **3. `window.scrollY`**

// ScrollY is nothing but the height from the very top of the page **down to the top edge of my laptop screen**.
// If I’m in the middle, it means this value tells me how much I have scrolled from the top until the start of my **current visible laptop screen**.
// Example: If my visible laptop screen starts at 40px from the top, ScrollY = 40px.
// It’s simply the **distance from the very top to the current visible screen’s top**.