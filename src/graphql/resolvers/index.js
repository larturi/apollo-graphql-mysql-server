const { personaQueries, personaMutations } = require('./persona');
const { paisQueries, paisMutations } = require('./pais');
const { lenguajeQueries, lenguajeMutations } = require('./lenguaje');

const resolvers = {
   Query: {
      ...personaQueries,
      ...paisQueries,
      ...lenguajeQueries,
   },
   Mutation: {
      ...personaMutations,
      ...paisMutations,
      ...lenguajeMutations,
   },
};

module.exports = resolvers;
