const { DataTypes } = require('sequelize');
const db = require('../../Services/db/db');

const User = db.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    photo_cover: {
      type: DataTypes.STRING,
    },
    photo_profile: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Asegura que cada email sea único
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isEnable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, // Valor predeterminado en true
    },
  });

  module.exports = User;