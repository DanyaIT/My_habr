import React, { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {

    const [count, setCount] = useState(0)

    function increment(){
        setCount(count + 1)
    }
  return (
    <>
   <div>Счетчик</div>
    <button className={classes.btn}
    onClick = {increment}>
      Добавить
      </button>
    <span>{count}</span>
    </>
  )
}

