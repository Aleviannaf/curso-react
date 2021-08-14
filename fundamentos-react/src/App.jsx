import './App.css'
import Card from './components/layout/Card'

import React from 'react'

import MegaSena from './components/mega/MegaSena'
import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import UsuarioIf from './components/condicional/UsuarioIf'
import IsPAr from './components/condicional/IsPar'
import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParamentros'
import Fragmentado from './components/basic/Fragmentado'
import Aleatorio from './components/basic/Aleatorio'
import AleatorioCurso from './components/basic/AleatorioCurso'
import Family from './components/basic/Family'
import MembroFamily from './components/basic/MembroFamily'
import ListaAluno from './components/repeticao/ListaAluno'
import TabelaPreco from './components/repeticao/TabelaPreco'
import TabelaProdutos from './components/repeticao/produtos/Produtos'

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card title="Mega Sena" color="#E05E7A">
        <MegaSena></MegaSena>
      </Card>
      <Card title="Mega Sena">
        <Mega></Mega>
      </Card>
      <Card title="Contador" color="#E05E7A" >
        <Contador numeroInicial={10}></Contador>
      </Card>
      <Card title="Componente controlado" color="84648F" >
        <Input></Input>
      </Card>
      <Card title="Indireta Comunicação" color="#84648F">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card title="Teste condicional" color="#E05E7A">
        <UsuarioIf usuario={{ nome: 'Alexandre viana' }}></UsuarioIf>
      </Card>
      <Card title="Impar ou Par">
        <IsPAr number="6"></IsPAr>
      </Card>
      <Card title="Tabela Curso" color="#84648F">
        <TabelaProdutos></TabelaProdutos>
      </Card>
      <Card title="Tabelas" color="#A89811">
        <TabelaPreco></TabelaPreco>
      </Card>
      <Card title="Repetição" color="#8566FF">
        <ListaAluno></ListaAluno>
      </Card>
      <Card title="Sprede" color="#38101C">
        <Family sobrenome="Vianna">
          <MembroFamily nome="Alexandre" />
          <MembroFamily nome="Alex" />
          <MembroFamily nome="Cassia" />
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
