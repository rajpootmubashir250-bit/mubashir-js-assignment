//  Assignment 1 start 

var name = prompt("Enter your name:");
var age = +prompt("Enter your age:");
var year = +prompt("Enter current year:");

var birthYear = year - age;

alert("Hello " + name + ", your birth year is " + birthYear);

// Assignment 1 End

// Assignment 3 start

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");

var operator = prompt("Enter operator (+, -, *, /):");

if (operator == "+") {
    alert(num1 + num2);
}
else if (operator == "-") {
    alert(num1 - num2);
}
else if (operator == "*") {
    alert(num1 * num2);
}
else if (operator == "/") {
    alert(num1 / num2);
}
else {
    alert("Invalid Operator");
}


// Assignment 3 End

// Assignment 5 start


var hour = +prompt("Enter current hour (0-23):");

if (hour >= 5 && hour < 12) {
    alert("Good Morning!");
}
else if (hour >= 12 && hour < 17) {
    alert("Good Afternoon!");
}
else if (hour >= 17 && hour <= 23 || hour >= 0 && hour < 5) {
    alert("Good Evening / Good Night!");
}
else {
    alert("Invalid Time!");
}



// Assignment 5 End

// Assignment 9 start 
var num = +prompt("Enter a number:");
var range = +prompt("Enter table range:");

for (var i = 1; i <= range; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// Assignment 9 End
