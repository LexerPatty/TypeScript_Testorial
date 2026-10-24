// function functionName(): returnType{
//     return value;
// }


// WITHOUT PARAMETER AND WITHOUT RETURN TYPE
function add(): number {
    let a = 10;
    let b = 20;

    return a + b;
}

let result = add();
console.log(result);


//FUNCTION RETURNING STRING with parameter
function func_greet(name: string): string {
    return `Hello ${name}`;
}

console.log(func_greet("Aman"));


//FUNCTION WITH UNION TYPE
function complex():number|string| boolean{
    let data=10;
    let name="anil sidhu"
    let type="age";

    if(type=='ages'){
        return data;
    }else{
        return name
    }
}

console.log(complex());



// Function Returning an Object
function getUser(): { name: string; age: number ; company:string;} {
    return {
        name: "Pushpendu",
        age: 25,
        company: "ABC Pvt Ltd"
    };
}

console.log(getUser());