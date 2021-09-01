const { ApolloServer } = require('apollo-server');
const schema = require('./graphql/schema');
const models = require('./models');

// Conexion a la BD
models.sequelize.authenticate().then(() => {
   console.log('Conectado a la BD');
});
models.sequelize.sync();

// Servidor GraphQL
const apolloServer = new ApolloServer({
   schema,
   context: { models },
});

apolloServer.listen({ port: 4001 }).then(({ url }) => {
   console.warn(`Apollo Server corriendo en ${url}`);
});
