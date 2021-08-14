import React from "react";
import If from "./If"

export default (props)=>{
  const usuario = props.usuario
  return (
    <div>
      <If teste={usuario || usuario.nome}>
        Seja Bem vindo {usuario.nome}
      </If>
    </div>
  )
}