import { useState } from "react"

export const useCounter = (initialValue = 100) =>{

  const [count, setCount] = useState(initialValue)

  function inc(n = 1){
    setCount(count + n)
  }
  function dec(n = 1){
    setCount(count - n)
  }

  return [count, inc, dec]
}