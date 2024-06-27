function onDone() {
    console.log('Hii, there')
}

setTimeout(onDone, 1000)

let a = 0

console.log('after setTimeout')

for(let i = 0; i <= 100000 ; i++) {
    a++;
}

console.log('after loop')