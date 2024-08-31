import React, { useState } from 'react';
import axios from 'axios';

const AdicionarTarefa = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const enviarTarefa = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/tarefas', {
        titulo: titulo,
        descricao: descricao,
        concluida: false
      });
      console.log(response.data.mensagem);
      setTitulo('');
      setDescricao('');

    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  return (
    <form onSubmit={enviarTarefa} className="mb-3">
      <label className="form-label">Título</label>
      <div className="input-group mb-1">
        <input
          type="text"
          className="form-control"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Titulo da tarefa"
          required
        />
      </div>
      <label className="form-label">Descrição</label>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição da tarefa"
        />
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-outline-success">Salvar
        </button>
      </div>
    </form>
  );
};

export default AdicionarTarefa;
