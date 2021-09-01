const lenguajeController = require('../../../controllers/lenguajeController');

const lenguajeQueries = {
   getLenguajes: async () => lenguajeController.findAll(),
   getLenguaje: async (_, id) => lenguajeController.findByPk(id),
};

module.exports = lenguajeQueries;
