function getInfo() {
    //console.log("TypeScript is a superset of JavaScript that adds static types and powerful features for building large applications.");
    const nameInput = document.getElementById("username") as HTMLInputElement;
    // console.log(nameInput.value);
    const name: String = nameInput.value;
    
    const emailInput = document.getElementById("email") as HTMLDivElement;
    const email:String = emailInput.value;
    
    const ageInput = document.getElementById("age") as HTMLInputElement;
    const age:String = ageInput.value;


    console.log(name, email, age);
    

    
}