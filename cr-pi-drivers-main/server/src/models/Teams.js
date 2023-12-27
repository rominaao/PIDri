const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Teams', {
    ID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};