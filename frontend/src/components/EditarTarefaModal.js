import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditarTarefaModal = ({ show, handleClose, tarefa, onUpdate }) => {
  const [titulo, setTitulo] = useState(tarefa.titulo);
  const [descricao, setDescricao] = useState(tarefa.descricao);
  const [concluida, setConcluida] = useState(tarefa.concluida);

  const editaTarefa = async () => {
    try {
      await axios.put(`http://localhost:8000/api/tarefas/${tarefa.id}`, { titulo, descricao, concluida });
      onUpdate(tarefa.id, titulo, descricao, concluida);
      handleClose();
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Tarefa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitulo">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDescricao">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formConcluida">
            <Form.Label>Concluída</Form.Label>
            <Form.Control
              as="select"
              value={concluida}
              onChange={(e) => setConcluida(e.target.value)}
            >
              <option value="1">Sim</option>
              <option value="0">Não</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={editaTarefa}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditarTarefaModal;
