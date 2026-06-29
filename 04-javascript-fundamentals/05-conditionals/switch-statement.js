// switch statement 

// syntax : 

// switch (expression) {
//    case condition 1: statement(s)
//    break;
   
//    case condition 2: statement(s)
//    break;
//    ...
   
//    case condition n: statement(s)
//    break;
   
//    default: statement(s)
// }

// The switch statement is used to execute one block of code from multiple possible cases based on the value of an expression. If no case matches, the default block runs

let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "green":
    console.log("Go");
    break;

  case "yellow":
    console.log("Wait");
    break;

  default:
    console.log("Invalid Color");
}