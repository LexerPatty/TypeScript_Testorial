//var var_name :datatype = value;

var num1: number = 10;
//let num2: number = 20; // its gives error for let cause one is declared as let in ts and similar is declared as var in js

var num2: number = 20;
var total = num1 + num2;
console.log(`The total is: ${total}`); // Output: The total is: 30


// oct, hexa , binary 
var octalNum: number = 0o10; // Octal representation (base 8)
var hexNum: number = 0x10; // Hexadecimal representation (base 16
var binaryNum: number = 0b10; // Binary representation (base 2)
console.log(`Octal: ${octalNum}, Hexadecimal: ${hexNum}, Binary: ${binaryNum}`); // Output: Octal: 8, Hexadecimal: 16, Binary: 2

console.log("Octal + 10:", octalNum + 10);
console.log("Hexadecimal + 10:", hexNum + 10);
console.log("Binary + 10:", binaryNum + 10);


//convertion 
var item: number = 10;
var item2 = "50";
var convertedItem = Number(item2); // Convert string to number

console.log("Item + Converted Item:", item + convertedItem); // Output: 60
console.log("Item + +Converted Item:", item + +convertedItem); // another method Output: 60


//type inference
// var data = 30;
// data = 40;
// data = "Hello"; // This will cause an error because 'data' is inferred as a number

//data can store either a number OR a string.
var data : number | string = 30; // Now 'data' can be either a number or a string
console.log(data); // Output: 30
data = "Pushpendu Dey"; // Valid
console.log(data);