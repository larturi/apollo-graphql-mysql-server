const { persona } = require('../models');

const create = async (input) => {
   const { nombre, apellido, active } = input;
   return await persona.create({
      nombre,
      apellido,
      active,
   });
};

const findAll = async () => {
   return await persona.findAll();
};

const findByPk = async ({ id }) => {
   return await persona.findByPk(id);
};

module.exports = {
   create,
   findAll,
   findByPk,
};
