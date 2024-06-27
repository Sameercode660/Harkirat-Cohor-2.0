const fs = require('fs')

function readTextFile() {
    return new Promise(async function(resolve) {
        const response = await fetch('./file.json')
        const data = response.json()
        resolve(data)
    })
}

function printData(data) {
    console.log(data)
}

readTextFile().then(printData)