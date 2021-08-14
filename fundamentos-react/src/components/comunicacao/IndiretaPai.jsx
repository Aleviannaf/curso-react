import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
  let [nome, setNome] = useState('?') //me permite ter estado, essa função vai me retornar um array com 2 posições
  //retorna o valor em sí e uma função. função para alterar valor
  let [idade, setIdade] = useState(0)
  let [nerd, setNerd] = useState(false)

  //Nome idade nerd
  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>{idade} </span>
        <span>{nerd ? 'Verdadeiro' : 'False'}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  )
}
