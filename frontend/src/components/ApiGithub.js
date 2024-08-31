import React, { useState } from 'react';
import axios from 'axios';

const BuscarUsuarioGitHub = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  const buscaUsuarioGit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepos(response.data);
    } catch (error) {
      setError('Usuário não encontrado ou erro ao buscar repositórios.');
      setRepos([]);
    }
  };

  return (
    <div className="container my-4">
      <form onSubmit={buscaUsuarioGit} className="mb-3">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nome do usuário no GitHub"
          />
          <button type="submit" className="btn btn-outline-primary">Buscar</button>
        </div>
      </form>
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group col-md-3">
        {repos.map((repo) => (
          <li key={repo.id} className="list-group-item list-group-item-action list-group-item-light">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuscarUsuarioGitHub;
