# 🛠️ Gerenciador de Produtos

Aplicação fullstack para gerenciamento de produtos, com funcionalidades de cadastro, listagem, edição, exclusão e filtro por nome/modelo. Construída com **NestJS + SQLite + TypeORM no backend** e **React + TypeScript + Styled Components no frontend**.

---

## 🚀 Como rodar o projeto

### 📦 Backend

```bash
cd backend
npm install
npm run start:dev
```

* Acesse: `http://localhost:3000`
* Documentação Swagger: `http://localhost:3000/api`

> Requisitos: Node.js, SQLite

### 🌐 Frontend

```bash
cd frontend
npm install
npm run dev
```

* Acesse: `http://localhost:3001`

---

## 📷 Interface

![Tela do sistema](./screenshot.png)

---

## 📁 Estrutura de Pastas

```
.
├── backend
│   ├── src
│   │   └── products
│   │       ├── dto
│   │       ├── products.controller.ts
│   │       ├── products.service.ts
│   │       └── entities
│   └── main.ts
│
└── frontend
    ├── src
    │   ├── components
    │   └── pages
```

---

## 🔗 Tecnologias Utilizadas

### Backend

* [NestJS](https://nestjs.com/)
* [TypeORM](https://typeorm.io/)
* [SQLite](https://www.sqlite.org/index.html)
* [class-validator](https://github.com/typestack/class-validator)
* [Swagger](https://swagger.io/)

### Frontend

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Styled Components](https://styled-components.com/)
* [Vite](https://vitejs.dev/)
* [Axios](https://axios-http.com/)

---

## 🧾 Funcionalidades

### Backend

* CRUD completo de produtos
* Validação de dados com DTOs
* Documentação automática via Swagger
* Estrutura organizada por módulo

### Frontend

* Tela de listagem com filtro por modelo/marca
* Formulário para criar e editar produtos
* Toasts de feedback (sucesso/erro)
* Consumo da API com Axios
* Estilização com Styled Components

---

## 📝 Observações

* Este projeto não possui testes automatizados nem CI/CD configurado.
* A documentação da API pode ser visualizada acessando `/api` no backend rodando localmente.
