import React from "react";

export default props =>{
  const {max, min} = props
  const result = parseInt(Math.random() *(max-min)) + min
  return (
    <div>
      <h2>Numero aleatorio com descrutic</h2>
      <p>Número min: {min}</p>
      <p>Número max: {max}</p>
      <p>O Número aleatório é : {result}</p>
    </div>
  )
}