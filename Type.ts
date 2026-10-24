// A type is a way to create your own custom data type. 
// Instead of writing the same type definition again and again, you give it a name and reuse it.

// type TypeName = {
//     property: type;
// };

// instead of writing these 
// let user_Type: {
//     name: string;
//     age: number;
// };



type user_Type = {
    name: string;
    age: number;
};


let person_type:user_Type={
    name:"Pushpendu",
    age:24
}

console.log(person_type);



// Type with Function
function display_type (ut:user_Type): void{
    console.log(ut.name , ut.age);   
}

display_type({name : "ABC" , age:24})



// | Feature            | Interface                        | Type               |
// | ------------------ | -------------------------------- | ------------------ |
// | Define objects     | ✅ Yes                            | ✅ Yes              |
// | Union Types (`\|`) | ❌ No                             | ✅ Yes              |
// | Intersection (`&`) | Limited (usually with `extends`) | ✅ Yes              |
// | Primitive aliases  | ❌ No                             | ✅ Yes              |
// | Arrays/Tuples      | Possible, but less common        | ✅ Yes              |
// | Extending          | `extends`                        | `&` (intersection) |





// Type with Array

let product_types : user_Type[] = [
    {name : "Ram" , age:24},
    {name : "Sita" , age:20}
]

console.log(product_types)