module.exports = (sequelize, DataTypes) => {
   const Lenguaje = sequelize.define(
      'Lenguaje',
      {
         id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
         },
         nombre: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
         },
      },
      {}
   );
   return Lenguaje;
};
