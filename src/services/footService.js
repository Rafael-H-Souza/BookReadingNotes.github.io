const footRepository = require('../repositories/footRepository')

class FookService {
    async register(time, nameTime, player, position, numberPlayer){        
        return await footRepository.createFoot({time, nameTime, player, position, numberPlayer})
    }
    async updateFoot(book){       
        await footRepository.updateFoot(book)       
    }    
    async getFoots(){
        return await footRepository.findAll()
    }
    async getFoot(id){
        return await footRepository.findByFootId({id})
    }
    async deleteFoot(id) {
        await footRepository.deleteByFootId({id})        
    }
    
    
}
module.exports = new FookService();
