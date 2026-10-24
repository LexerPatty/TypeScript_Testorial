async function getUsers(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

// DISPLAY ONLY USERS NAME .......
    users.forEach((user: any) => {
        console.log(user.name);
    });

    console.log(users);
}

getUsers();



