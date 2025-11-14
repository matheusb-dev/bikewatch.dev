# ⌚ bikewatch - NODE.JS MIGRATION

Este projeto é uma migração de um site estático (HTML/CSS/JS Vanilla) para uma arquitetura baseada em **Node.js** e **Express**, utilizando **EJS** para renderização de templates.

O objetivo principal desta estrutura é separar a lógica de apresentação (HTML/CSS/JS do cliente) da lógica de dados (o objeto `productData` no Back-end).

---

## 🛠️ Tecnologias Utilizadas

* **Node.js:** Ambiente de execução.
* **Express.js:** Framework minimalista para criar o servidor web.
* **EJS (Embedded JavaScript):** Motor de templates para construir o HTML dinamicamente no servidor.
* **JavaScript Vanilla:** Para a interatividade e troca de conteúdo no lado do cliente.

---

## 📂 Estrutura do Projeto

A estrutura segue o padrão de aplicações web, separando responsabilidades:

| Pasta/Arquivo | Responsabilidade | Função |
| :--- | :--- | :--- |
| `server.js` | **Back-end** | Configura o servidor Express, define rotas (`/`), e gerencia a renderização dos templates. |
| `data.js` | **Back-end** | Armazena o objeto de dados (`productData`) central. |
| `views/` | **Templates** | Contém os arquivos `.ejs` (esqueleto HTML) usados pelo servidor. |
| `public/` | **Front-end (Estático)** | Contém arquivos que o navegador consome diretamente (CSS e JS do cliente). |
| `node_modules/` | **Dependências** | Gerenciada pelo NPM, contém os códigos do Express e EJS. (Esta pasta é ignorada no `.gitignore`). |

---



