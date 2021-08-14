import React from 'react'
import Produtos from '../../data/produtos'
import "./TabelaPreco.css"

export default props => {
  const TabProdutos = Produtos.map(produto => {
    return (
      <tr key={produto.id}>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    )
  })

  return (
    <table className="table">
      <caption>
        <thead>Produtos</thead>
      </caption>
      <tbody>
        <tr>
          <th>Nome:</th>
          <th>Preço:</th>
        </tr>
        {TabProdutos}
      </tbody>
    </table>
  )
}
