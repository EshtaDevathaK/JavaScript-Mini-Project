class Person {                            // Define a Person class (a blueprint for Person objects)
  constructor(name, age) {                // Special method to initialize new Person objects
    this.name = name;                     // Set the name property of the new object
    this.age = age;                       // Set the age property of the new object
  }

  greet() {                              // Define a method called greet (a behavior of Person objects)
    return `Hello, my name is ${this.name}, and I am ${this.age} years old.`; // Returns greeting string using object's properties
  }
}

// 2️⃣ Inheritence - linking proptypes or using extends keyword :
class Student extends Person {            // Student is a subclass of Person, inherits Person’s features
  constructor(name, age, school) {        // Initialize new Student objects with an additional school property
    super(name, age);                     // Call Person's constructor to set name and age properties
    this.school = school;                 // Set the school property unique to Student
  }

  study() {                             // New method specific to Student
    return `${this.name} is studying at ${this.school}.`;  // Returns study message using Student's properties
  }
}

// 3️⃣ DOM interactions: hook buttons to actions
const btnPerson = document.getElementById('btnPerson');   // Find button with id 'btnPerson' in HTML
const btnStudent = document.getElementById('btnStudent'); // Find button with id 'btnStudent' in HTML
const output = document.getElementById('output');         // Find output element to display results

// When 'btnPerson' is clicked:
btnPerson.addEventListener('click', () => {
  const p = new Person('Alice', 30);  // Create a new Person object with name "Alice" and age 30
  output.textContent = p.greet();     // Call greet() method on Person object and display text
});

// When 'btnStudent' is clicked:
btnStudent.addEventListener('click', () => {
  const s = new Student('Bob', 20, 'ABC University');  // Create Student object with name, age, school
  output.textContent = s.greet() + '\n' + s.study();   // Call inherited greet() and Student's study() methods and display text
});

// 🔎 What is Prototype?
// 👉 Every JavaScript object has a hidden property called [[Prototype]] (accessible as .prototype for functions/classes).

// 👉 Prototype acts like a blueprint — it holds methods and properties that can be shared across all instances.


// 🔎 What is Inheritance?
// 👉 Inheritance means one class can inherit properties and methods from another class, so we don’t have to duplicate code.

// 👉 In JavaScript, inheritance is achieved by linking prototypes or using the extends keyword in ES6.




// 1️⃣ What is this?
// this is a special keyword in JavaScript that refers to the current object you’re creating or working with.

// Inside the constructor, this points to the new object that is being created by new Person().
// 2️⃣ What is .name?
// .name is a property on that object, like a label or a shelf that holds a value.
// 3️⃣ Why do we assign this.name = name?
// The name on the right side of the equals sign (name) is a parameter that you pass to the constructor when creating a new Person.