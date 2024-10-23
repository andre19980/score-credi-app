# Aprova Fácil

Este projeto é uma aplicação web **responsiva** desenvolvida para realizar o cadastro de usuários e análise de perfil para aprovação de crédito. A aplicação foi construída utilizando **Next.js** para o frontend e **Express** no backend. O sistema realiza a coleta de dados dos usuários, processa informações e, com base em critérios de análise, avalia se o perfil do usuário é elegível para aprovação de crédito.

## Tecnologias Utilizadas

### Frontend
- **Next.js 14**
- **React**
- **Tailwind CSS**
  
### Backend
- **Express**
- **Node.js**

## Funcionalidades

- **Cadastro de Usuário**: Permite que novos usuários se registrem no sistema fornecendo as seguintes informações: nome, idade, cidade e renda mensal.
- **Login**: Autenticação segura usando JWT.
- **Análise de Perfil**: Avalia os dados de crédito e renda do usuário para determinar a elegibilidade para aprovação de crédito.

## Instalação

### Pré-requisitos
- **Node.js** (v20+)

### Passos para executar o projeto

1. Dentro da pasta, instale as dependências:
    ```bash
    npm install
    ```

2. Execute a aplicação em modo `dev`:
    ```bash
    npm run dev
    ```

  Ou se quiser rodar a aplicação em uma versão pronta `prod`:

  ```bash
  npm run build
  npm run start
  ```

3. Acesse a aplicação no navegador:
    ```
    http://localhost:3000
    ```

4. Para rodar os testes, execute:
    ```
    npm run test
    ```