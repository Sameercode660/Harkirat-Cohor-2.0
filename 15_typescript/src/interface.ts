// create a function isLegal that returns true or false if a user is above 18. It takes a user as an input 

interface User {
    firstName: string,
    lastName: string,
    email: string,
    age: number
}

const user: User = {
    firstName: 'Mohd',
    lastName: 'Sameer',
    email: 'mohdsameer789736@gmail.com',
    age: 17
}

function isLegal(user: User): boolean {
    if(user.age < 18) {
        return false
    } else {
        return true
    }
}

const result: boolean = isLegal(user)

console.log(result)




















export{}