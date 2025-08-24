console.log(" ");
// (numbers, function(  acc,    n)          0  );
function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i]); // Update accumulator with each iteration
    }
    return accumulator;// Return the final accumulated result
  }
  
  // ✅ Example usage:
 let  numbers = [1, 2, 3, 4, 5];

  //                       (arr,    callback(accumulator, arr[i])
  const sum = customReduce(numbers, function( acc, n) // Add the current value (n) to the accumulator
  { return acc + n; },  0  ); // Starting value of the accumulator is 0
 //                 initialValue)


  console.log(sum, "Custom Reduce Function"); // 15
  console.log(" ");















// Using the built-in reduce function to sum the numbers


const numbers2 = [1, 2, 3, 4, 5];

const sum2 = numbers2.reduce(function(acc, n) {
  return acc + n; // Add the current value (n) to the accumulator (acc)
}, 0); // Starting value of the accumulator is 0

console.log(sum2, "built-in reduce function"); // 15
  console.log(" ");