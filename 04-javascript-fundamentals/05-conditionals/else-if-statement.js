// if else-if statement 

// The if...else if... statement is used to check multiple conditions and execute the block of the first true condition. If no condition is true, the else block runs

// syntax:

// if (expression 1) {
//    Statement(s) to be executed if expression 1 is true
// } else if (expression 2) {
//    Statement(s) to be executed if expression 2 is true
// } else if (expression 3) {
//    Statement(s) to be executed if expression 3 is true
// } else {
//    Statement(s) to be executed if no expression is true
// }

let numberOne = 10;
let numberTwo = 15;
let numberThree = 20;

if(numberOne > numberTwo && numberOne > numberThree) {
    console.log(numberOne,"is greater than ",numberTwo,"and",numberThree);
}

else if(numberTwo > numberOne && numberTwo > numberThree) {
    console.log(numberTwo,"is greater than ",numberOne,"and",numberThree);
}

else {
    console.log(numberThree,"is greater than ",numberOne,"and",numberTwo);
    
}