import React, { useMemo, useState } from 'react'

/*
    Your task is to create a component that performs an expensive calculatation(finding the factorial) based on a user input. 
    Use useMemo to ensure that the calculation is only recomputed when the input changes not on every render.
 */


function Assignment1() {

 const [input, setInput] = useState(0)

const factorial = useMemo(function () {

    let fact = 1

    for(let i = input; i >= 1; i--) {
        fact *= i
    }

    return fact
}, [input])

  return (
    <div>
        <input type="number" onChange={(e) => {
            setInput(Number(e.target.value))
        }} placeholder='0' />
        <div>
            <span>The factorial is : {factorial}</span>
        </div>
    </div>
  )
}

export default Assignment1
