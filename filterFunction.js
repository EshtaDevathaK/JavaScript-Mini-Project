const numbers = [2, 4, 6, 8, 10];

// Using the built-in filter function to get only even numbers
const evenNumbers = numbers.filter(function(n) {
  return n % 2 === 0;
});
console.log(" ");
console.log(evenNumbers , "Built-in filter function"); 
console.log(" ");





// Index Places Are Printed 
function customFilter1(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // ✅ Example usage:
  const numbers1 = [1, 2, 3, 4, 5];
  const even1 = customFilter1(numbers1, function(n) {
    return n % 2 === 0;
  });
  console.log(even1, "Index Places Are Printed for First program"); // [2, 4]
  
  console.log(" ")






// Index Places Are Printed 
  function customFilter2(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]); //*** Note : Here val is declared but not Read But accessing Value  via the Index arr[i]  [0] ->[10, 20, 30, 40, 50]-> means 10 */
      }
    }
    return result;
  }
  
  // Example usage:
  const numbers2 = [10, 20, 30, 40, 50];
  
  // Keep elements at even indexes (0, 2, 4 → values 1, 3, 5)
  const filtered = customFilter2(numbers2, (val, idx) => idx % 2 === 0);   //*** Note : Here val is declared but not Read  */
  // even index places are Printed ,  Value is not filtered on even basis,
  // Note that  only index number is filtered based on even index places
  
  console.log(filtered, "Index Places Are Printed for Second  program"); // [1, 3, 5]
  console.log(" ");



 

// Vaues  Places Are Printed 
function customFilter1(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// ✅ Example usage:
const num  = [1, 2, 3, 4, 5];

// Before Program we Read The index Values so index was filtered and printed
//But here 
const valfiltered = customFilter2(num, (val, idx) => val % 2 === 0); // Only a small change instead of idx we Read The Values of num num  = [1, 2, 3, 4, 5]
// Properly values are filtered
                                                                    
console.log(valfiltered, "Values are filtered and Printed "); // [2, 4]
console.log(" ");