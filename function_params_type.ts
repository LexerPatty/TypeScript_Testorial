//  single param 
// multi param

// Optional Parameters
console.log("\nOptional Parameters.....................");
function opt_greet(name: string, city?: string): void {
    console.log(name, city);
}

opt_greet("Pushpendu");
opt_greet("Pushpendu", "Kolkata");



// Default Parameters
console.log("\nDefault Parameters.....................");
function default_greet(name: string = "Guest"): void {
    console.log("Hello " + name);
}

default_greet();
default_greet("Aman");


// Object Parameter
console.log("\nObject Parameters.....................");
function displayUser(user: { name: string; age: number }): void {
    console.log(user.name, user.age);
}

displayUser({
    name: "Pushpendu",
    age: 25
});


// Array Parameter
console.log("\nArray Parameters.....................");
function printNumbers(nums: number[]): void {
    console.log(nums);
}
printNumbers([10, 20, 30]);


// Union Type Parameters


// Function Parameter with Tuple
console.log("\nFunction Parameter with Tuple Parameters.....................");
function showStudent(student: [string, number]): void {
    console.log(student[0], student[1]);
}

showStudent(["Aman", 22]);


// Rest Parameters
function add(...numbers: number[]): number {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(10, 20, 30, 40));


// Type Alias for Parameters
