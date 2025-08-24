// ✅ Custom Debounce
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // reset timer
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ✅ Custom Throttle
function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// 🔍 Debounce Usage: Search
const input = document.getElementById('searchInput');
const result = document.getElementById('searchResult');

function handleSearch(e) {
  result.textContent = `You searched for: "${e.target.value}"`;
}

input.addEventListener('input', debounce(handleSearch, 500));

// 📜 Throttle Usage: Scroll Count
const scrollBox = document.getElementById('scrollBox');
const scrollCount = document.getElementById('scrollCount');
let count = 0;

function handleScroll() {
  count++;
  scrollCount.textContent = `Scroll Count: ${count}`;
}

scrollBox.addEventListener('scroll', throttle(handleScroll, 300));
