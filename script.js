let myString = "Hello, world!";
let myNumber = 55;
let myBoolean = true;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Division by zero is not allowed.");
        return null;
    }
}


function multiply(a, b) {
    return a * b;
}

// Event listeners for buttons
document.getElementById("addButton").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = add(num1, num2);
    document.getElementById("result").textContent = "Result: " + result;
});

document.getElementById("subtractButton").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = subtract(num1, num2);
    document.getElementById("result").textContent = "Result: " + result;
});

document.getElementById("divideButton").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = divide(num1, num2);
    document.getElementById("result").textContent = "Result: " + result;
});

document.getElementById("multiplyButton").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = multiply(num1, num2);
    document.getElementById("result").textContent = "Result: " + result;
});

// Event listener for toggling text visibility
document.getElementById("toggleButton").addEventListener("click", function() {
    const toggleText = document.getElementById("toggleText");
    if (toggleText.classList.contains("hidden")) {
        toggleText.classList.remove("hidden");
    } else {
        toggleText.classList.add("hidden");
    }
});

// Event listener for highlighting text
document.getElementById("highlightButton").addEventListener("click", function() {
    const highlightText = document.getElementById("highlightText");
    highlightText.classList.toggle("highlight");
});

// Create a chart using Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Change this to 'line', 'pie', etc. to try different chart types
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Monthly Sales',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


console.log("String: " + myString); 
console.log("Number: " + myNumber); 
console.log("Boolean: " + myBoolean); 
