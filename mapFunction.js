const numbers1 = [2, 4, 6, 8, 10];

// Using the built-in map function to double each value
const doubled1 = numbers1.map(function(n) {
  return n * 2;
});

console.log(doubled1 , "Built-in Map function"); // [4, 8, 12, 16, 20]
console.log(" ");



function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], arr));
    }
    return result;
  }
  
  // ✅ Example usage:
  const numbers = [2, 4, 6, 8, 10]; 
  const doubled = customMap(numbers, function(n) { //function(n) is same as callback(arr[i]) so directly access the value 
    return n * 2;
  });
  console.log(doubled , "custom Map function"); // [2, 4, 6, 8, 10]
  