// Import named exports
import { sum, multiply } from './utils.js';

// Import default export (give any alias)
import subtract from './utils.js';

const output = document.getElementById('output');

// Use the imported functions
const a = 10,
  b = 5;

output.textContent = `
sum(${a}, ${b}) = ${sum(a, b)}
multiply(${a}, ${b}) = ${multiply(a, b)}
subtract(${a}, ${b}) = ${subtract(a, b)}
`;
