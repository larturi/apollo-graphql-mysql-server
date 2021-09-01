const paisController = require('../../../controllers/paisController');

const paisQueries = {
   getPaises: async () => paisController.findAll(),
   getPais: async (_, id) => paisController.findByPk(id),
};

module.exports = paisQueries;
