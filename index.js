//Assigning code1 an expression that evaluates to 10
let code1;
code1 = 7 + 3;
console.log(code1);

//Calculate a value to 40 using three numbers and the subtraction and division operators
let code2;
code2 = 100 / 2 - 10;
console.log(code2);

//Calculate a value of 39 using a modulo operator
let code3;
code3 = 139 % 50;
console.log(code3);

//Assigning variable "message"
let message = "The vault has been secured. The combniation is:";
console.log(message);

//Concatenating variables code1, code2 and code3
let codeA = code1 + "-" + code2 + "-" + code3;
console.log(codeA);

//Using template literal to string together code1, code2, and code3 with a dash between each variable
let codeB = `${code1}-${code2}-${code3}`;
console.log(codeB);

//Printing message, codeA, and codeB to terminal
console.log(`${message} ${codeA} ${codeB}`);
