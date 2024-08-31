import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeletarTarefa from './DeletarTarefa';
import EditarTarefaModal from './EditarTarefaModal';

const ListarTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [tarefaAtual, setTarefaAtual] = useState(null);

  useEffect(() => {
    const buscarTarefas = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/tarefas');
        setTarefas(response.data.tarefas);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    buscarTarefas();
  }, []);

  const exibirModal = (tarefa) => {
    setTarefaAtual(tarefa);
    setShowModal(true);
  };

  const fechaModal = () => {
    setShowModal(false);
    setTarefaAtual(null);
  };

  const alteraStatusConcluida = async (id, concluida) => {
    try {
      await axios.put(`http://localhost:8000/api/tarefas/${id}`, { concluida });
      setTarefas(tarefas.map(tarefa => 
        tarefa.id === id ? { ...tarefa, concluida } : tarefa
      ));
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  const deletaTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  return (
    <div>
      <table className="table table-hover">
      <caption>Lista de tarefas</caption>
        <thead className='table-secondary'>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Concluída</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {tarefas.map((tarefa) => (
            <tr key={tarefa.id}>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>
                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onChange={() => alteraStatusConcluida(tarefa.id, !tarefa.concluida)}
                />
              </td>
              <td>
                <button className="btn btn-outline-warning btn-sm" onClick={() => exibirModal(tarefa)}>Editar</button>
                <DeletarTarefa id={tarefa.id} onDelete={deletaTarefa} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tarefaAtual && (
        <EditarTarefaModal
          show={showModal}
          handleClose={fechaModal}
          tarefa={tarefaAtual}
          onUpdate={(id, titulo, descricao, concluida) => setTarefas(tarefas.map(t => t.id === id ? { ...t, titulo, descricao, concluida } : t))}
        />
      )}
    </div>
  );
};

export default ListarTarefas;
