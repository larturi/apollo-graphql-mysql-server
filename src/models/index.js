require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
   process.env.DB_NAME,
   process.env.DB_USER,
   process.env.DB_PASSWORD,
   {
      host: 'localhost',
      dialect: 'mysql',
      logging: false,
   }
);

// Models
const models = {
   persona: sequelize.import('./persona'),
   pais: sequelize.import('./pais'),
   lenguaje: sequelize.import('./lenguaje'),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
