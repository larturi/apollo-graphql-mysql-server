const paisController = require('../../../controllers/paisController');

const paisMutations = {
   createPais: async (_, { input }) => paisController.create(input),
};

module.exports = paisMutations;
