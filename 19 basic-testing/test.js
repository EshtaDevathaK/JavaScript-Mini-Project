// 1️⃣ Utility functions
function sum(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

// 2️⃣ Simple test runner
function test(description, fn) {
  try {
    fn();
    console.log(`✅ PASS: ${description}`);
  } catch (error) {
    console.error(`❌ FAIL: ${description}`);
    console.error('   ', error.message);
  }
}

// 3️⃣ Assertion helper
function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Expected ${expected}, but got ${actual}`);
  }
}

// 4️⃣ Define tests
test('sum(2, 3) should be 5', () => {
  assertEqual(sum(2, 3), 5);
});

test('sum(-1, 1) should be 0', () => {
  assertEqual(sum(-1, 1), 0);
});

test('isEven(4) should return true', () => {
  assertEqual(isEven(4), true);
});

test('isEven(3) should return false', () => {
  assertEqual(isEven(3), false);
});

// 5️⃣ Intentionally failing test (uncomment to see failure)
// test('sum(2,2) should be 5 (this fails)', () => {
//   assertEqual(sum(2, 2), 5);
// });
