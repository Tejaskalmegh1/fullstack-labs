// Logical Operators
// ( && , || , ! )

let numberOne = 15
let numberTwo = 10
let output

// Logical AND (&&) Operator
// Evaluates operands from left to right. Returns the first falsy value it finds; if all operands are truthy, it returns the last value

output = (numberOne > 10 && numberOne < 20) ? true : false ;
console.log(output);


// Logical OR (||) Operator
// The Logical OR (||) operator checks if at least one operand is truthy. It evaluates from left to right and stops when it finds the first truthy value

output = (numberOne < 10 || numberOne < 20) ? true : false ;
console.log(output);


// Logical NOT (!) Operator
// The Logical NOT (!) operator is a unary operator that reverses the boolean value of its operand

let isLoggedIn = false;
output = (!isLoggedIn) ? "Please log in..." : "Welcome!" ;
console.log(output);