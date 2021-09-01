const personaController = require('../../../controllers/personaController');

const personaQueries = {
   getPersonas: async () => personaController.findAll(),
   getPersona: async (_, id) => personaController.findByPk(id),
};

module.exports = personaQueries;
