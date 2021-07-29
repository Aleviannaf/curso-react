import React from 'react'
import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParamentros'
import Fragmentado from './components/basic/Fragmentado'
import Aleatorio from './components/basic/Aleatorio'
import AleatorioCurso from './components/basic/AleatorioCurso'
import Card from './components/layout/Card'
import "./App.css"
import Family from "./components/basic/Family"
import MembroFamily from "./components/basic/MembroFamily";
import ListaAluno from './components/repeticao/ListaAluno'

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card title="Repitição">
        <ListaAluno></ListaAluno>
      </Card>

      <Card title="Sprede" color="#38101C">
        <Family sobrenome="Vianna">
          <MembroFamily nome="Alexandre"/>
          <MembroFamily nome="Alex"/>
          <MembroFamily nome="Cassia"/>
        </Family>
      </Card>
      <Card title="Com Parametros" color="#F77352">
        <ComParametro aluno="Alexandre viana" nota={6.98} />
      </Card>
      <Card title="Fragmentado" color="#B5F75E">
        <Fragmentado />
      </Card>
      <Card title="Aleatorio Curso" color="#F7457E">
        <AleatorioCurso max={10} min={50} />
      </Card>
      <Card title="Aleatorio" color="#2DF7B4">
        <Aleatorio max={200} min={100} />
      </Card>
      <Card title="Primeiro" color="#D639F7">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
)
