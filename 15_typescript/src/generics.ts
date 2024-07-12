function doSomething<T>(arr: T[]): T {
    return arr[0];
}


const result = doSomething<string>(["Sameer", "Amit", 1, 1, 'Amit'])

console.log(result)


export {}