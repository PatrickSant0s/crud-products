# 🛠️ Gerenciador de Produtos

Aplicação fullstack para gerenciamento de produtos, com funcionalidades de cadastro, listagem, edição, exclusão, paginação e filtro por nome/modelo.

Construída com NestJS, MongoDB (via Docker) e Mongoose no backend, e React + TypeScript + Styled Components no frontend.

A aplicação também conta com testes End-to-End (E2E) utilizando Jest e Supertest para garantir a estabilidade das rotas de API.

---

## 🚀 Como rodar o projeto

### 📦 Backend

```bash
cd backend
npm install
npm run start:dev
npm run test:e2e
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

![image](https://github.com/user-attachments/assets/6501b671-ace5-4cf8-a8ea-10c7125acdbd)


---

## ✅ Funcionalidades

### Backend

* Cadastro de produtos com campos validados
* Listagem de produtos com paginação
* Filtro por nome ou marca via query string
* Atualização de produtos por ID
* Exclusão de produtos
* Documentação da API com Swagger
* Estrutura modular com uso de DTOs
* Criação, leitura, atualização e exclusão de produtos (CRUD completo)
* Testes E2E com Supertest + Jest cobrindo rotas `/products`

### Frontend

* Tela de listagem com filtro por nome/modelo
* Paginação de resultados
* Formulário de cadastro e edição de produto
* Toasts de feedback de sucesso e erro
* Consumo da API com Axios
* Estilização com Styled Components
* Deploy funcional na Vercel




## 🔄 Testes End‑to‑End (E2E)

Agora a API conta com **testes automatizados E2E** para as rotas de produtos:

- `POST /products` — Criação de produto
- `GET /products` — Listagem de produtos
- `GET /products/:id` — Busca por ID
- `PATCH /products/:id` — Atualização parcial
- `DELETE /products/:id` — Exclusão de produto (retorna status 204)

Os testes são escritos em Jest com `supertest`, garantindo que o backend inteiro (controller → service → banco) funcione como esperado.




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
    │   ├── pages
    │   ├── services
    │   └── types
```

---

## 🔗 Tecnologias Utilizadas

### Backend

* [NestJS](https://nestjs.com/)
* [TypeORM](https://typeorm.io/)
* [SQLite](https://www.sqlite.org/index.html)
* [class-validator](https://github.com/typestack/class-validator)
* [class-transformer](https://github.com/typestack/class-transformer)
* [Swagger](https://swagger.io/)
* [nanoid@3](https://www.npmjs.com/package/nanoid)

Instalação:

```bash
npm i nanoid@3 sqlite3 typeorm @nestjs/typeorm class-validator class-transformer
```

### Frontend

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Styled Components](https://styled-components.com/)
* [Vite](https://vitejs.dev/) *(se usado)*
* [Axios](https://axios-http.com/)

---

## 🌍 Deploys

### Frontend

Deploy disponível em:
🔗 [crud-products.vercel.app](https://crud-products-c4na6h6d7-patricksant0s-projects.vercel.app/)

> O backend ainda está disponível localmente em `http://localhost:3000`

---

## 📝 Observações

* O backend utiliza MongoDb 
* O deploy atual está apenas para o frontend. O backend pode ser facilmente publicado via [Render](https://render.com) ou [Railway](https://railway.app).
* Dados não são persistidos entre deploys em ambientes serverless com SQLite.

---

Feito com 💻 por Patrick Santos


* A documentação da API pode ser visualizada acessando `/api` no backend rodando localmente.
