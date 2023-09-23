const db = require('../../Services/db/db');
const { DataTypes } = require('sequelize');
const User = require('./userModel');
// Define el modelo "Session" con los campos id, token, apiToken y userId
const Session = db.define('Session', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apiToken: {
      type: DataTypes.STRING,
    },
    driverInfo: {
        type: DataTypes.STRING
    }
  });
  
  // Establece la relación entre Session y User (varias sesiones pertenecen a un usuario)
  Session.belongsTo(User, {
    foreignKey: 'userId',
  });

  module.exports = Session;