const db = require('../../Services/db/db');
const User = require('./userModel');
const { DataTypes } = require('sequelize');

// Define el modelo "Address" con los campos id, province, city y street
const Address = db.define('Address', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    province: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    street: {
        type: DataTypes.STRING,
    },
});
// Define la relación entre User y Address (un usuario puede tener una dirección)
User.hasOne(Address, {
    foreignKey: 'userId',
});


module.exports = Address;