import React from "react"

export default (props)=>{
  const isPar= props.number %2 === 0 ? 'Par' : 'Impar'
  return(
    <div>
      <span>O número é: {isPar}</span>
    </div>
  )
}