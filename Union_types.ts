// A Union Type allows a variable, parameter, or function return value to be one of multiple types.
// let variable: type1 | type2;

var union: number | string;

union = 10;
console.log(union);

union = "Pushpendu";
console.log(union);



// Function Parameter with Union Type
function printUnion(value: string | number): void {
    console.log(value);
}

console.log("\nFunction Parameter with Union Type : ");
printUnion("Hello");
printUnion(100);



// Object Property with Union Type
console.log("\nObject Property with Union Type: ");
let objectUnion: {
    name: string;
    id: string | number;
}[] = [
    {
        name: "Aman",
        id: 101
    },
    {
        name: "Rahul",
        id: "EMP102"
    },
    {
        name: "Pushpendu",
        id: 103
    }
];

console.log(objectUnion);