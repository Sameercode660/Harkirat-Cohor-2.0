   function myOwnSetTimeout(cb, duration) {
    setTimeout(cb, duration)
}

// myOwnSetTimeout(function() {
//     console.log('Hello, Javascript')
// }, 2000)d


// promisify a function 

function promisifiedSetTimeout(duration) {
    return new Promise(function(resolve) {
        setTimeout(resolve, duration)
    })
}

let result = promisifiedSetTimeout(3000)

result.then(function() {
    console.log('Hello, Javascript!')
})


