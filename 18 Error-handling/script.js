const jsonInput = document.getElementById('jsonInput');
const btnParse = document.getElementById('btnParse');
const output = document.getElementById('output');

btnParse.addEventListener('click', () => {
  const text = jsonInput.value.trim();
  output.textContent = ''; // clear previous output

  try {
    // Attempt to parse JSON
    const parsed = JSON.parse(text);

    // If successful, pretty-print each key/value, converts the object into an array of key-value pairs:
    for (const [key, value] of Object.entries(parsed)) { //for ... of loop goes through each pair one by one.
      // for (const [key, value] -> only by this we can , Print  => key and Value in a Single Line )
      output.textContent += `${key}: ${JSON.stringify(value)}\n`;
    }
  } catch (err) {
    // Catch JSON syntax errors (or other errors)
    output.textContent = `❌ Invalid JSON: ${err.message}`;
  }
});


// {
//   "name": "Alice",
//   "age": 30,
//   "hobbies": ["reading", "hiking"]
// }


// Absolutely! Let’s use a concrete example to make this clearer. Suppose you paste this JSON into the textarea:

 

// {
//   "name": "Alice",
//   "age": 30,
//   "hobbies": ["reading", "hiking"]
// }
// Now let’s walk through line by line in the try block:

// 1️⃣ const parsed = JSON.parse(text);
// This line takes the JSON string (text) and converts it into a JavaScript object:

// parsed = {
//   name: "Alice",
//   age: 30,
//   hobbies: ["reading", "hiking"]
// };

// 2️⃣ for (const [key, value] of Object.entries(parsed)) {
// Object.entries(parsed) converts the object into an array of key-value pairs:

// [
//   ["name", "Alice"],
//   ["age", 30],
//   ["hobbies", ["reading", "hiking"]]
// ]
// The for ... of loop goes through each pair one by one.

// 3️⃣ Inside the loop:
// Each time through the loop:

// First iteration:
// key = "name"

// value = "Alice"

// Then:

// output.textContent += "name: \"Alice\"\n";
// (JSON.stringify(value) on "Alice" adds the quotes around it!)

// Second iteration:
// key = "age"

// value = 30

// Then:

// output.textContent += "age: 30\n";
// (JSON.stringify(value) on a number just prints 30)

// Third iteration:
// key = "hobbies"

// value = ["reading", "hiking"]

// Then:

// output.textContent += "hobbies: [\"reading\",\"hiking\"]\n";
// (JSON.stringify(value) on the array outputs it as a JSON string.)

// 4️⃣ After all iterations:
// output.textContent now looks like this:

// vbnet

// name: "Alice"
// age: 30
// hobbies: ["reading","hiking"]
// Summary
// ✅ This code takes any JSON object (assuming it’s valid)
// ✅ Converts it to a JavaScript object
// ✅ Then prints each key and value nicely, even handling nested data like arrays.