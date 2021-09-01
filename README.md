<h1 align="center">
  PoC: Scalable Apollo Server, GraphQL, Sequelize & MySQL
</h1>

<h3 align="center">
  -- Apollo Server, GraphQL, Sequelize & MySQL --
</h3>

<h5 align="center">
  Made with ❤️ by Leandro Arturi
</h5>

## Getting Started

First, create a new MySQL DataBase and edit the.env file:

```bash
DB_NAME='your-db-name'
DB_USER='your-db-user'
DB_PASSWORD='your-db-password'
```

Run the development server:

```bash
npm run watch
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

## Prod

```bash
npm start
```

## Add a new Model

```bash
1. New Model -> Create the model in models/[modelName]
2. Declare Model -> Add a new line with the model declaration in models/index.js
3. Resolvers -> Create a new folder [modelName] in graphql/resolvers with index, mutations and queries files
4. Declare Query and Mutation in graphql/resolvers/index.js
5. TypeDefs -> Create a new file [modelName] in graphql/typedefs
6. Controller -> Create a new file [modelName] in controllers
```
