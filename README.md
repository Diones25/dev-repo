
![img](./back-end/src/assets/node.png)
# Dev Repo

Sistema completo com Login criado com back-end em Node e JWT, que salva repositórios do github e pesquisa esse repositórios, no front-end foi usado React.
## Instalação

Para rodar o projeto deve ter instalado o Node JS e o NPM e rodar os comandos abaixo:

```bash
  cd back-end
  npm install 
  npm run dev
  -------------
  cd front-end
  npm install 
  npm run start
```

## Documentação da API

#### Rota de criação de repositórios
##### Essa rota tem a salva um novo repositório

```
  POST /users/:user_id/repositories
```
*Parâmetros user_id - É o id do usuário que está criando o repositório

#### Objeto do body 
```
No corpo da requisição do body deve conter esse seguinte objeto JSON:

{
  "name": "facebook/react",
  "url": "https://github.com/facebook/react"
}

```

#### Retorna um JSON

```
  Deve retornar um JSON com os dados do repositório salvo.
{
  "name": "facebook/react",
  "url": "https://github.com/facebook/react",
  "userId": "63f69481f118069ede2312ab",
  "_id": "6404033db01336d424b47817",
  "createdAt": "2023-03-05T02:49:33.975Z",
  "updatedAt": "2023-03-05T02:49:33.975Z",
  "__v": 0
}
````

#### Rota de repositórios

```
  GET /users/:user_id/repositories
```
*Parâmetros user_id - É o id do usuário que está criando o repositório

#### Retorna um JSON

```
```
  Deve retornar um JSON com os dados dos repositório do usuário
[
  {
    "_id": "6404008e3ea0aecf31b232d5",
    "name": "TJ Holowaychuk/Express",
    "url": "https://github.com/expressjs/express",
    "userId": "63f69481f118069ede2312ab",
    "createdAt": "2023-03-05T02:38:06.944Z",
    "updatedAt": "2023-03-05T02:38:06.944Z",
    "__v": 0
  },
  {
    "_id": "6404033db01336d424b47817",
    "name": "facebook/react",
    "url": "https://github.com/facebook/react",
    "userId": "63f69481f118069ede2312ab",
    "createdAt": "2023-03-05T02:49:33.975Z",
    "updatedAt": "2023-03-05T02:49:33.975Z",
    "__v": 0
  }
]
````



## Stacks utilizadas

**Back-end:** Node, Express, Cors, Bcrypt, dotenv, jsonwebtoken, mongoose, nodemon, sucrase.

**Front-end:** React, Axios, react-router-dom

## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack, usando as tecnologias Node JS no Back-end e React no Fron-end, API Restfull e estudando outras tecnologias interessantes e em alta no mercado.

## 🛠 Habilidades
Javascript, HTML, CSS, Node JS, PHP, Mongo DB, React...

## 🔗 Links
[![GitHub](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Diones25)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diones-pereira-alves-31bb3969/)

