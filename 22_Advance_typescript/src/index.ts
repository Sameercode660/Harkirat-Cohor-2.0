// interface User {
//     id: string;
//     name: string;
//     age: string;
//     email: string;
//     password: string;
// };

// // type UpdateProps = Pick<User, 'name' | 'age' | 'email'>
// // type UpdateProps = Partial<User>


// function updateUser(updateProps: UpdateProps) {
//     // hit the database to update the user
// }


interface Config {
     endpoint: string;
     apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: '123',
    apiKey: '123'
}

config.apiKey = 123