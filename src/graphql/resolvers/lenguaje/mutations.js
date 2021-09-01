const lenguajeController = require('../../../controllers/lenguajeController');

const lenguajeMutations = {
   createLenguaje: async (_, { input }) => lenguajeController.create(input),
};

module.exports = lenguajeMutations;
