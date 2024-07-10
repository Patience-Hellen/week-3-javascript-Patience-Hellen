// Declare variables of different data types
let myString = "Hello, world!";
let myNumber = 42;
let myBoolean = true;

// Define and call functions to perform simple operations

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Division by zero is not allowed.");
        return null;
    }
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Call the functions and use console.log() to print the output
let num1 = 10;
let num2 = 5;

console.log("Add: " + add(num1, num2));          // Output: Add: 15
console.log("Subtract: " + subtract(num1, num2)); // Output: Subtract: 5
console.log("Divide: " + divide(num1, num2));    // Output: Divide: 2
console.log("Multiply: " + multiply(num1, num2)); // Output: Multiply: 50

// Print variables to debug code
console.log("String: " + myString);              // Output: String: Hello, world!
console.log("Number: " + myNumber);              // Output: Number: 42
console.log("Boolean: " + myBoolean);            // Output: Boolean: true
