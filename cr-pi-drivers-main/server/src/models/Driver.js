const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripción: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Nacionalidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FechaDeNacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};