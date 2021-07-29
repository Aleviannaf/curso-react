import React from 'react'
export default (props) =>{
  const result = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
  return (
    <div>
        <h3>Situação do Aluno</h3>
        <p>O aluno {props.aluno} obteve a nota {props.nota} e está {result}</p>
    </div>
  )
}