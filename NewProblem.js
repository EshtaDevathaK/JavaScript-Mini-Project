
let arr = [32, 15, 3, 72];
let n = arr.length;

for (let i = 0; i < Math.floor(n / 2); i++) {
  // Swap arr[i] with arr[n - 1 - i]

  // arr[i] → arr[0]  
  let temp = arr[i];

  //n - 1 - i → 4 - 1 - 0
  arr[i] = arr[n - 1 - i];

  arr[n - 1 - i] = temp;
}

console.log(arr , " this is an Normal reverse from scratch function"); // Output: [4, 3, 2, 1]





let arr3 = [21, 45, 68, 32, 45];

for(var j = 0 ; j < arr3.length -1; j ++ ) {
for(var i = 0 ; i < arr3.length -j -1; i ++ ) {
    if(arr3[i] > arr3[i + 1]){
        let temp = arr3[i];
        arr3[i] = arr3[ i + 1];
        arr3[i + 1] = temp;
    }
  }  
}

console.log(arr3 ," Bubble sorting array");



let array = [45, 6, 8, 10];

let array2 = [...array];


console.log(array2);



 