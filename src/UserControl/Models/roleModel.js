const db = require('../../Services/db/db');
const User = require('./userModel');
const { DataTypes } = require('sequelize');

// Define el modelo "Roles" con los campos id, type, read, publish y shopping
const Roles = db.define('Roles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  read: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // Valor predeterminado en false
  },
  publish: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // Valor predeterminado en false
  },
  shopping: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // Valor predeterminado en false
  },
  isAdmin:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

User.belongsTo(Roles, {
  foreignKey: 'roleId',
});

module.exports = Roles;