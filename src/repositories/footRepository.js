const Foot = require('../models/foot');

//id, time, nameTime, player, position, numberPlayer
class FootRepository {
    async createFoot(foot) {
       return await Foot.create(foot);
    }

    async updateFoot(foot) {
        await Foot.update({ time: food.time, nameTime: food.nameTime, player: foot.player, position: foot.position, numberPlayer: foot.numberPlayer},{ where: { id: food.id } })        
    }

    async findByFootId(foot) {
        await Foot.findOne({ where: { id: foot.id } });
    }
    
    async deleteByFootId(foot) {
        await Foot.destroy({ where: { id: foot.id } });
    }
    async findByFootId(foot) {
        return await Foot.findOne({ where: { id: foot.id } });
    }

    async findAll() {
        return await Foot.findAll();
    }
}
// Exporta uma instância do UserRepository
module.exports = new FootRepository();