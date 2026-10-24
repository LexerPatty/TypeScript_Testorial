//symbol data type in typescript
// Symbol is a primitive data type in TypeScript that represents a unique and immutable value.
// It is often used as object property keys to avoid name clashes, especially in large applications or

var sym = Symbol();
var sym2 = Symbol();

var sym3 = Symbol("description"); // Symbols can have an optional description
var sym4 = Symbol("description"); // Even with the same description, symbols are unique

console.log(sym ==sym2); // false, symbols are unique
console.log(sym);
console.log(sym2);

console.log(sym3 == sym4); // false, symbols are unique even with the same description


const did = Symbol("id");
// You're creating a Symbol called did.
// Symbol("id") creates a unique identifier with a label "id" (for debugging, not value).
// Even if you create another Symbol("id"), it will still be different.

const user = {
    // id: 100,//STATIC KEY 
    [did]: 200, // DYNAMIC KEY
    name: "Pushpendu Dey",
}
// In this example, you're using a Symbol as a key in the user object.
//Note: This symbol-keyed property is not accessible using dot notation or string keys like user.id.

// console.log(user.id);
console.log(user[did]); // Accessing the symbol property using the symbol



