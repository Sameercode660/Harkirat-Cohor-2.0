function doSomething<T>(arr: T[]): T {
    return arr[0];
}


const result = doSomething<string>(["Sameer", "Amit", 'Amit'])

console.log(result)


export {}