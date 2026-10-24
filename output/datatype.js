"use strict";
// types of datatypes in typescript thats are primitive , object , special , advanced, functional
// primitive datatypes in ts are
// string , number , boolean , null , undefined , symbol , bigint
var num = 10;
var num = 10.10; // both integer and float are allowed in number type
// string is a primitive type that represents a sequence of characters.
var str = "Hello, TypeScript!";
//boolean is a primitive type that can only have two values: true or false.
var isActive = true;
// null is a special type that represents the intentional absence of any object value.
var nothing = null;
//undefined is a primitive type that represents a variable that has been declared but not assigned a value.
var notAssigned = undefined;
// symbol is a primitive type that represents a unique and immutable value, often used as object property keys.
var uniqueSymbol = Symbol("unique");
var sym2 = Symbol("another unique symbol");
var sym3 = Symbol("another unique symbol");
console.log(`Symbol comparison: ${sym3 === sym2}`); // false, symbols are unique
// bigint is a primitive type that represents integers with arbitrary precision, useful for very large numbers.
// var bigIntValue: bigint = BigInt(123456789012345678901234567);
//object or collection type
// object: Represents non-primitive types.
let person = { name: "Aman", age: 22 };
console.log(person);
console.log(person.name);
console.log(person.age);
// any type 
let randomValue = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue); // Output: true
let value = "hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
