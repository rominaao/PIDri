const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Teams', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};