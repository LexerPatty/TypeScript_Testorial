"use strict";
// var data: null = null;
// var val : undefined = undefined;
var data1 = null;
var username = null; // userName can be null or string
var login = true;
if (login) {
    username = "Pushpendu Dey"; // Assigning a string value to username
}
console.log(typeof data1); // Output: object (null is considered an object in JavaScript)
//null===undefined // false, null and undefined are different types
//null==undefined // true, loose equality considers them equal
var username2 = undefined; // username2 can be string or undefined
username2 = "Pushpendu Dey"; // Assigning a string value to username2
console.log(typeof username2); // Output: string
