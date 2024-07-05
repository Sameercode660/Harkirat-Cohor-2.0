import React, { useState } from 'react'

// track the number of reder in a react application

let numberOfRender = 0;

function Assignment2() {

  const [state, setState] = useState(0)

  numberOfRender += 1;
  console.log(numberOfRender)
  return (
      <div>
        <button
        onClick={() => {
          setState(prev => prev + 1)
        }}
        >{state}</button>
    </div>
  )
}

export default Assignment2
