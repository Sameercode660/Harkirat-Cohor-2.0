import React, { useEffect, useState } from 'react'
import { countAtom } from '../store/atoms/countAtoms'
import { useRecoilValue } from 'recoil'
import { evenCheckSelector } from '../store/atoms/countAtoms'

function CountRenderer() {

  const count = useRecoilValue(countAtom)
  const filter = useRecoilValue(evenCheckSelector)
  const [even, setEven] = useState('')
  useEffect(() => {
    if(filter) {
      setEven('Number is even')
    } else {
      setEven('')
    }
  }, [count])
  return (
    <div>
        {count}
        <span>{even}</span>
    </div>
  )
}

export default CountRenderer
