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
