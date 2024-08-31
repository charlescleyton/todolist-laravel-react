# TODOLIST com Laravel e React

Este projeto é uma aplicação full-stack que implementa um CRUD de tarefas. A API é construída em Laravel e o frontend em React, utilizando os hooks `useState` e `useEffect`. O banco de dados utilizado é MySQL.
Além disso, a aplicação permite buscar repositórios públicos de um usuário do GitHub.

## Sumário

* [Pré-requisitos](#pr%C3%A9-requisitos)
* [Instalação](#instala%C3%A7%C3%A3o)
* [Configuração](#Testes PHPUnit)
* [Testes PHPUnit](#Testes-PHPUnit)
* [Endpoints da API](#endpoints-da-api)
* [Componentes do Frontend](#componentes-do-frontend)
* [Como Executar](#como-executar)
* [Funcionalidades](#funcionalidades)
* [Autor](#autor)

## Pré-requisitos

* PHP >= 7.4
* Composer
* Node.js >= 14.x
* npm ou yarn
* MySQL

## Instalação

### 1. Backend (Laravel)

1. Instale as dependências do Laravel:
   `composer install`
2. Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente
3. Gere a chave da aplicação:
   `php artisan key:generate `
4. Crie o banco de dados MySQL e configure-o no arquivo `.env`.
5. Rode as migrações e os seeders:
   `php artisan migrate --seed`
6. Inicie o servidor de desenvolvimento do Laravel:
   `php artisan serve`

### 2. Frontend (React)

1. Instale as dependecias do React:
   `npm install`
2. Inicie o servidor de desenvolvimento:
   `npm start`

## Configuração

### Backend

No arquivo `.env`, configure as seguintes variáveis de ambiente para o Laravel:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nome_do_banco
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha

```

# Testes PHPUnit

Este repositório contém o código-fonte de um projeto Todolist (lista de tarefas) desenvolvido em Laravel. Nesta documentação, explicaremos como executar os testes automatizados para garantir a qualidade do código.

## Executando os Testes

Para executar os testes automatizados, utilize o seguinte comando:

`php artisan test`

Isso executará todos os testes definidos no diretório `tests`.

## Endpoints da API

| Método | Endpoint          | Descrição                    |
| ------- | ----------------- | ------------------------------ |
| GET     | /api/tarefas      | Retorna todas as tarefas       |
| POST    | /api/tarefas      | Cria uma nova tarefa           |
| GET     | /api/tarefas/{id} | Retorna uma tarefa específica |
| PUT     | /api/tarefas/{id} | Atualiza uma tarefa existente  |
| DELETE  | /api/tarefas/{id} | Deleta uma tarefa              |

## Como Executar

1. Inicie o servidor do backend:
   `php artisan serve `
2. Inicie o servidor do frontend:
   `npm start`
3. Abra o navegador e acesse `http://localhost:3000` para interagir com a interface de usuário.

## Funcionalidades

### Adicionar Tarefa

1. Preencha os campos de título e descrição da tarefa.
2. Clique no botão “Adicionar Tarefa”.

### Editar Tarefa

1. Clique no botão “Editar” ao lado da tarefa que deseja editar.
2. Atualize os campos de título, descrição e concluida conforme necessário.
3. Clique no botão “Salvar”.

### Deletar Tarefa

1. Clique no botão “Deletar” ao lado da tarefa que deseja excluir.
2. Confirme a exclusão no modal de confirmação.

### Marcar Tarefa como Concluída

1. Marque ou desmarque o checkbox ao lado da tarefa para atualizar seu status de conclusão.

### Buscar Repositórios do GitHub

1. Insira o nome de usuário do GitHub no campo de busca.
2. Clique no botão “Buscar” para exibir os repositórios públicos do usuário.

## Autor

[Charles Pereira](https://linktr.ee/charlescleyton) - Desenvolvedor Full-Stack
