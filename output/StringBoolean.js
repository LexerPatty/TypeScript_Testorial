"use strict";
// why we not directly use ts file in browser we use javascript file
// because ts file is not directly executable in browser, we need to compile it to js
var str = "Hello, TypeScript!";
var str2 = 'Hello, World!';
var str3 = `Hello, Type`;
var age = 25;
var userName = "John Doe";
var info = `User Name: ${userName}, Age: ${age}`; // Template literal for string interpolation
console.log(info); // Output: User Name: John Doe, Age: 25
//number to string conversion
var num = 42;
var numToString = num.toString(); // Convert number to string
//boolean to string conversion
var isActive = true;
var boolToString = isActive.toString(); // Convert boolean to string
