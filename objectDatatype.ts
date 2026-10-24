var object: { name: string; age: number ; company:string } = {
    name: "Aman",
    age: 22,
    company: "ABC Pvt Ltd"
};

console.log(object);

// accesing object properties 
console.log(object.age);


// NESTED OBJECT 
console.log("\nNested Object.....................");
let obj_employee: {name: string; age: number;
    address: {city: string; pin: number;};
} = {
    name: "Pushpendu",
    age: 25,
    address: {
        city: "Kolkata",
        pin: 700001
    }
};

console.log(obj_employee);
console.log(obj_employee.address.city);



//USING TYPE ALIAS FOR OBJECTS
type Person = {
    id:number;
    name: string;
    age: number;
};

let p1: Person = {
    id:1,
    name: "Aman",
    age: 22
};

let p2: Person = {
    id:2,
    name: "Rahul",
    age: 25
};


console.log(p1);



// Optional Properties
let obj_opt: {
    name: string;
    age?: number;
} = {
    name: "Aman"
};

console.log(obj_opt);