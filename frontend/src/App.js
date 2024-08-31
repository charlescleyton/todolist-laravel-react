// src/App.js
import React, { useState } from 'react';
import AdicionarTarefa from './components/AdicionarTarefa';
import ListarTarefas from './components/ListarTarefas';
import ApiGitHub from './components/ApiGithub';

const App = () => {
  const [activeTab, setActiveTab] = useState('tarefas');

  const mudaTabela = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <h2 className="my-4">Projeto prático to do list</h2>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'adicionar' ? 'active' : ''}`}
            onClick={() => mudaTabela('adicionar')}
          >
            Adicionar Nova Tarefa
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'tarefas' ? 'active' : ''}`}
            onClick={() => mudaTabela('tarefas')}
          >
            Listagem de Tarefas
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'github' ? 'active' : ''}`}
            onClick={() => mudaTabela('github')}
          >
            Buscar Usuário no GitHub
          </button>
        </li>

      </ul>
      {activeTab === 'tarefas' ? <ListarTarefas /> : activeTab === 'github' ? <ApiGitHub /> : <AdicionarTarefa />}
    </div>
  );
};

export default App;
