const orders = [
  { id: 1, price: 10 },
  { id: 2, price: 30 },
  { id: 3, price: 20 },
  { id: 4, price: 50 },
];

// 1️⃣ map: double each price
const doubledPrices = orders.map(order => order.price * 2);

// 2️⃣ filter: orders with price > 25
const expensiveOrders = orders.filter(order => order.price > 25);

// 3️⃣ reduce: total revenue (sum of all prices)
const totalRevenue = orders.reduce((acc, order) => acc + order.price, 0);

// Display results
const output = document.getElementById('output');

output.textContent = `
Original orders: ${JSON.stringify(orders, null, 2)}

1. Prices doubled (map): ${JSON.stringify(doubledPrices, null, 2)}

2. Expensive orders (filter): ${JSON.stringify(expensiveOrders, null, 2)}

3. Total revenue (reduce): ${totalRevenue} 

4. Total revenue JSON.stringify (reduce): ${JSON.stringify(totalRevenue, null, 2)} 

`;


// | Situation                        | Use `JSON.stringify()`? | Why?                               |
// | -------------------------------- | ----------------------- | ---------------------------------- |
// | DOM/Text Display of Object/Array | ✅ Yes                   | You can't display objects directly |
// | Sending data to API              | ✅ Yes                   | Body should be a JSON string       |
// | Saving to localStorage           | ✅ Yes                   | localStorage only stores strings   |
// | Debugging console with format    | ✅ Yes                   | Helps readable formatting          |
// | Value is simple string/number    | ❌ No                    | Already readable, no need          |
// | Object has circular reference    | ❌ No                    | It will throw error                |
