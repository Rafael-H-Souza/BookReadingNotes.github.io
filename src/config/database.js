const {Sequelize} = require('sequelize')


const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: 'DB'
});

sequelize.authenticate()
    .then(() =>{
        console.log('Conexão efetuada com sucesso');
        return sequelize.sync();
    }).catch(err =>{
        console.log('Falha na conexão .', err)
    })

module.exports = sequelize;