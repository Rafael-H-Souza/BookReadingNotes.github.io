const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Foot extends Model {}
// time, nameTime, Player, position, numberPlayer
Foot.init({
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    nameTime: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    Player: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numberPlayer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true
    }
}, {
    sequelize,
    modelName: 'Foot',
});

module.exports = Foot;