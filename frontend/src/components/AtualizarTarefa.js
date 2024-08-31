import React, { useState } from 'react';
import axios from 'axios';

const AtualizarTarefa = ({ id, descricaoAtual, onUpdate }) => {
  const [descricao, setDescricao] = useState(descricaoAtual);
  const [titulo, setTitulo] = useState('');

  const atualizaTarefa = async () => {
    try {
      await axios.put(`http://localhost:8000/api/tarefas/${id}`, { titulo, descricao });
      onUpdate(id, descricao);
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
      />
      <input
        type="text"
        className="form-control"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição"
      />
      <button onClick={atualizaTarefa} className="btn btn-success">Atualizar</button>
    </div>
  );
};

export default AtualizarTarefa;
