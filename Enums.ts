/*
Enum means Enumeration. It is a way to define a fixed set of values that we are allowed to use in our program.

Real-life example 🚦
Imagine a traffic light. It has only three possible colors:
RED — Stop
YELLOW — Wait
GREEN — Go

A traffic light cannot normally be purple, pink, or blue.
So, instead of allowing any color, we can define only the three valid options using an Enum.
*/

enum UserRole {
    Admin = 22,
    Teacher,
    Student
}

let role= UserRole.Admin;

if (role === UserRole.Admin){
    console.log("Access Admin Dashboard");
}


console.log(UserRole.Teacher);  // 23
