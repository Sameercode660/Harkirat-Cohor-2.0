function square(n) {
    return n * n
}

function cube(n) {
    return n * n * n
}

function sumOfSomething(a, b, fn) {
    let value1 = fn(a)
    let value2 = fn(b)

    return value1 + value2
}

let ans = sumOfSomething(2, 2, cube)

console.log(ans)