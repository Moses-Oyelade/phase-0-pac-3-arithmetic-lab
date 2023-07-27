//Addition operator
function add(number1, number2){
    let number = number1 + number2;
    return number;
}

//subtraction operator
function subtract(number1, number2){
    let number = number1 - number2;
    return number;
}

//multiplication operator
function multiply(number1, number2){
    let number = number1 * number2;
    return number;
}

//division operator
function divide(number1, number2){
    let number = number1 / number2;
    return number;
}

//Increment operator
let n = 0;

function increment(n){
    return n += 1;
}

//Decrement operator
function decrement(n){
    return n -= 1;
}

//ParseInt operator in base10
function makeInt(n){
    return n = parseInt(n, 10);
}

//ParseFloat operator
function preserveDecimal(n){
    return n = parseFloat(n);
}