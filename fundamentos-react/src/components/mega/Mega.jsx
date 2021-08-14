import './Mega.css'
import React from 'react'

export default props => {
  function gerarNumeros(qtds) {
    let max = 60
    let min = 1
    const mega = []
    for (let i = 0; i < qtds; i++) {
      const aleatorio = parseInt(Math.random() * (max - min)) + min
      mega.push(aleatorio)
    }

    return mega
  }

  const mega= gerarNumeros(6)

  const listMega= mega.map((elem,i) => {
    return (
      <h3 key={i}>
        {elem}
      </h3>
    )
  })
  
  return (
    <div className="listaMega">
     {listMega}
    </div>
  )
}
