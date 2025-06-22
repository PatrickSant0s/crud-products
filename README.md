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

### Frontend

* Tela de listagem com filtro por nome/modelo
* Paginação de resultados
* Formulário de cadastro e edição de produto
* Toasts de feedback de sucesso e erro
* Consumo da API com Axios
* Estilização com Styled Components
* Deploy funcional na Vercel

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

* O backend utiliza SQLite apenas para fins de demonstração. Em ambiente real, recomenda-se usar PostgreSQL ou outro banco persistente.
* O deploy atual está apenas para o frontend. O backend pode ser facilmente publicado via [Render](https://render.com) ou [Railway](https://railway.app).
* Dados não são persistidos entre deploys em ambientes serverless com SQLite.

---

Feito com 💻 por Patrick Santos

* Este projeto não possui testes automatizados nem CI/CD configurado.
* A documentação da API pode ser visualizada acessando `/api` no backend rodando localmente.
