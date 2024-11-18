const User = require('../models/user');

// name, category, author 
class UserRepository {
    async createUser(user) {
        return await User.create(user);
    }

    async findByUserName(username) {
        return await User.findOne({ where: { username } });
    }

    async findAll() {
        return await User.findAll();
    }
}
// Exporta uma instância do UserRepository
module.exports = new UserRepository();