const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Book extends Model {}
// name, category, author 
Book.init({
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
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Book',
});

module.exports = Book;
