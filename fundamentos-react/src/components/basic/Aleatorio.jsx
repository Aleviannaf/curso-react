import React from "react";

export default (props)=>{
  const aleatorio = Math.random() * (props.max - props.min) + props.min;
  return (
    <div>
        <h2>Gerando Número aleatorio</h2>
        <p>O número é: {aleatorio}</p>
    </div>
  )
}