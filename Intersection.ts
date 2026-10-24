// An Intersection Type combines multiple types into one type.
// Use the & operator.


type Person_Intersection = {
    name: string;
};

type Employee_Intersection = {
    salary: number;
};

type EmployeePerson = Person_Intersection & Employee_Intersection;

let emp: EmployeePerson = {
    name: "Aman",
    salary: 50000
};

console.log(emp);




// How to Use Intersection with Interface

interface Person_Interface_Intersection {
    name: string;
}

interface Employee_Interface_Intersection {
    salary: number;
}

interface Address_Interface_Intersection {
    city: string;
}

type EmployeePerson_Interface_Intersection = Person_Interface_Intersection & Employee_Interface_Intersection & Address_Interface_Intersection;

let emp_Interface_Intersection: EmployeePerson = {
    name: "Aman",
    salary: 50000 ,
    city: "Kolkata"
};

console.log("\ncalling_Interface_Intersection");
console.log(emp_Interface_Intersection);



// Intersection with Interface Using extends (Preferred) ***********