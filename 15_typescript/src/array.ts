
const array: number[] = [2,3,5,12,45,2,3,89,1];

function maximum(array: number []): number {
    
    let maxi: number = array[0];

    for(let i: number = 0; i < array.length; i++) {
        if(array[i] > maxi)
        {
            maxi = array[i];
        }
    }

    return maxi;
}

console.log(maximum(array));

