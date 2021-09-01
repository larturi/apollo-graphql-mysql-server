const { lenguaje } = require('../models');

const create = async (input) => {
   const { nombre, active } = input;
   return await lenguaje.create({
      nombre,
      active,
   });
};

const findAll = async () => {
   return await lenguaje.findAll();
};

const findByPk = async ({ id }) => {
   return await lenguaje.findByPk(id);
};

module.exports = {
   create,
   findAll,
   findByPk,
};
