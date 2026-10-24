// why we not directly use ts file in browser we use javascript file
// because ts file is not directly executable in browser, we need to compile it to js

var str: string = "Hello, TypeScript!";
var str2: string = 'Hello, World!';
var str3: string = `Hello, Type`;

var age: number = 25;
var userName: string = "John Doe";

var info: string = `User Name: ${userName}, Age: ${age}`; // Template literal for string interpolation
console.log(info); // Output: User Name: John Doe, Age: 25
 
//number to string conversion
var num: number = 42;
var numToString: string = num.toString(); // Convert number to string

//boolean to string conversion
var isActive: boolean = true;
var boolToString: string = isActive.toString(); // Convert boolean to string

 