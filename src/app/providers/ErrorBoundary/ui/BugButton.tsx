import React, { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'



const BugButton = () => {

    const [error, setError] = useState(false)

    useEffect(()=>{
        if(error){
            throw Error
        }
    }, [error])

    const onThrow = () => {
        setError(true)
    }

  return (
    <Button onClick={onThrow}>BugButton</Button>
  )
}

export default BugButton