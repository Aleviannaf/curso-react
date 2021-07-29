import React from 'react';
import alunos from '../../alunos';

export default (props) => {
  const listAluno = alunos.map(aluno => {
    return (
      <li key={aluno.id}>
        {aluno.nome} tem nota {aluno.nota}
      </li>
    );
  })
  return (
    <div>
      <ul style={{ listStyle: 'none' }}>{listAluno}</ul>
    </div>
  );
}
