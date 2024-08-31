import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const DeletarTarefa = ({ id, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const excluiTarefa = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/tarefas/${id}`);
      onDelete(id);
      setShowModal(false);
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

  return (
    <>
      <button className="btn btn-outline-danger btn-sm" onClick={() => setShowModal(true)}>Deletar</button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja deletar esta tarefa?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={excluiTarefa}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeletarTarefa;
