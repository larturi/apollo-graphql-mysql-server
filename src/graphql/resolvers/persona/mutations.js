const personaController = require('../../../controllers/personaController');

const personaMutations = {
   createPersona: async (_, { input }) => personaController.create(input),
};

module.exports = personaMutations;
