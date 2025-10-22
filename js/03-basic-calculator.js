// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    if (operation === "add" || operation === "+") {
  return x + y;
    } else if (operation === "subtract" || operation === "-") {
        return x - y;
    } else if (operation === "multiply" || operation === "*") {
        return x * y; 
    } else if (operation === "divide" || operation === "/") {
        return x / y;
    } else {
        alert("Invalid operation!");
    }
}
// COLLECT FIRST NUMBER FROM USER
let firstNumber

// COLLECT SECOND NUMBER FROM USER
let secondNumber

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operator

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result 

do {
    firstNumber = parseInt(prompt("Choose a number"));
    secondNumber = parseInt(prompt("Choose another number"));
    operator = prompt("Choose an operator. Do you want to add, subtract, multiply or divide?").toLowerCase();
    
    if (operator !== "add" && operator !== "subtract" && operator !== "multiply" && operator !== "divide" && operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
        alert("Invalid enter! Please choose a correct operation: add, subtract, multiply or divide");
    } else {
        result = calculate(firstNumber, secondNumber, operator)
    }
} while (operator !== "add" && operator !== "subtract" && operator !== "multiply" && operator !== "divide" && operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/")


    alert("The result is: " + result);
    



