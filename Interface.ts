// An interface is a way to define the structure of an object, function etc. / 
// An Interface is a blueprint or contract for an object.


// Why Do We Need Interfaces? 
// Without an interface We are repeating the same structure multi time
let interface1: { name: string; age: number } = {
    name: "Aman",
    age: 22
};

let interface2: { name: string; age: number } = {
    name: "Rahul",
    age: 25
};



// Instead of creating multi time , create an interface once:

// Syntax:
// interface InterfaceName {
//     property: type;
// }

interface InterfaceUser {
    name: string;
    age: number;
}

// TEHN USE IT ............
var user1: InterfaceUser = {
    name: "Aman",
    age: 22
};

var user2: InterfaceUser = {
    name: "Rahul",
    age: 25
};


console.log(user1);
console.log(user2);




// Extend Interface
interface EF {
    name: string;
    age: number;
}

interface Employee extends EF {
    salary: number;
}


interface EF {
    name: string;
    age: number;
}

// EXTEND THE PROPERTY OF EF
interface Employee extends EF {
    salary: number;
}

let extend_interface: Employee = {
    name: "Pushpendu",
    age: 25,
    salary: 50000
};

console.log("\nCalling the Extend Interface");
console.log(extend_interface);



// Interface vs Type Alias

// Both can describe object shapes but For object structures, 
// many TypeScript developers prefer interfaces, especially when inheritance (extends) is involved.
