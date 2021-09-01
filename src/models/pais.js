module.exports = (sequelize, DataTypes) => {
   const Pais = sequelize.define(
      'Pais',
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
   return Pais;
};
