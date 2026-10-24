// tuple is a fixed length array 
// it can contain different types of data
// it is a special type of array that can contain different types of data and has a fixed length


let myTuple: [number, string, boolean]= [1, "Anil Sidhu", true];
console.log(myTuple);

myTuple[0] = 3; // Valid
myTuple.push("Hello") // Valid, but it will not be type checked and can lead to unexpected behavior

console.log(myTuple);


// Accessing Tuple Elements
console.log(myTuple[2]);


// readonly tuple
let readonlyTuple: readonly [number, string] = [1, "Aman"];
// readonlyTuple[0] = 2; // Error: Cannot assign to '0' because it is a read-only property
// readonlyTuple.push("Hello"); // Error: Property 'push' does not exist on type 'readonly [number, string]'



// ARRAY VS TUPLE 
