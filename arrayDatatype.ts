var users:string[]=['anil','sam','peter'];
var marks:number[]=[50,60,92,36];

var students:Array<string>=['bruce','arya']
students.push('tony');
console.log(students);


// MIXED TYPES 
let arrayData: (number | string)[] = [10, "Aman", 20, "Rahul"];
console.log(arrayData);


// Array of Objects
let stu: { name: string; age: number }[] = [
    { name: "Aman", age: 22 },
    { name: "Rahul", age: 21 }
];

console.log(stu);
console.log(stu[0].name);