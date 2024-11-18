const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
    id: { 
        type: DataTypes.UUID, 
        defaultValue: Sequelize.UUIDV4, 
        allowNull: false, 
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User',
});

module.exports = User;
