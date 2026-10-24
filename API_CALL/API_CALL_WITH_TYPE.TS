// Using Types

type User_api_call = {
    id: number;
    name: string;
    email: string;
};


async function getUsers(): Promise<void> {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users: User_api_call[] = await response.json();

    users.forEach(user => {
        console.log(user.name);
        console.log(user.email);
        console.log();
    });

}

getUsers();