const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Movie extends Model {} 
Movie.init({
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Movie',
});

module.exports = Movie;