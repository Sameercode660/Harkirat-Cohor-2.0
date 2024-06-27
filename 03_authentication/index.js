const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = 'sameedr'

const app = express()
app.use(express.json())


const ALL_USERS = [
    {
        name: 'Mohd Sameer',
        username: 'mohdsameer@gmail.com',
        password: '1234'
    },
    {
        name: 'Rahul',
        username: 'Rahul@gmail.com',
        password: '7897'
    },
    {
        name: 'Amit',
        username: 'Amit@gmail.com',
        password: '9898'
    }
]

function userExits(username, password) {
    return ALL_USERS.find((user) => {
        return (user.username == username && user.password == password)
    })
}


app.post('/signin', function(req, res) {
    const {username, password} = req.body

    if(!userExits(username, password)) {
        return res.status(403).json({
            message: "User doesn't exist"
        })
    }

    const token = jwt.sign({username}, jwtPassword)

    res.status(200).json({
        token
    })

}) 


app.get('/users', function(req, res) {
    const token = req.headers.authorization
    const decode = jwt.verify(token, jwtPassword)

    const username = decode.username
    console.log(username)

    res.json({
        users: ALL_USERS
    })
})


app.listen(3000, function() {
    console.log('Server is listening on PORT:3000')
})