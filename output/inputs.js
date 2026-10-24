"use strict";
function getInfo() {
    //console.log("TypeScript is a superset of JavaScript that adds static types and powerful features for building large applications.");
    const nameInput = document.getElementById("username");
    // console.log(nameInput.value);
    const name = nameInput.value;
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const ageInput = document.getElementById("age");
    const age = ageInput.value;
    console.log(name, email, age);
}
