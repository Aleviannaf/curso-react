import React from "react";
import "./Produtos.css"
import produtos from "../../../data/produtoscurso"

export default (props) =>{

  function getLinhas(){
    return produtos.map((produto, i )=>{
        return(
          <tr key={produto.id} className={i%2==0? 'Par': 'Impar'}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>R$ {produto.preco}</td>
          </tr>
        )
    })
  }

    return(
      <div className="TabelaProdutos">
        <table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                {getLinhas()}
            </tbody>
        </table>
      </div>
    )
}