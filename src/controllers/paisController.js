const { pais } = require('../models');

const create = async (input) => {
   const { nombre, active } = input;
   return await pais.create({
      nombre,
      active,
   });
};

const findAll = async () => {
   return await pais.findAll();
};

const findByPk = async ({ id }) => {
   return await pais.findByPk(id);
};

module.exports = {
   create,
   findAll,
   findByPk,
};
