const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository')

class UserService {
    async register(username, password){
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await userRepository.createUser({username,password:hashedPassword})
        return user;
    }

    async getUsers(){
        return  userRepository.findAll()
    }
    async getUser(usename){
        const user = await userRepository.findByUserName(usename)

        if(!username){
            throw new Error('User not fond')
        }

        if(!isValidePassword){
            throw new Error('User or password not is valid ')
        }

        const token = jwt.sign({id:user.id},"51_Pinga", {expiresIn: '1h'})
        return token;

    }

    async login (username, password){
        const user = await userRepository.findByUserName(username)

        if(!username){
            throw new Error('User not fond')
        }

        const isValidePassword = await bcrypt.compare(password, user.password)

        if(!isValidePassword){
            throw new Error('User or password not is valid ')
        }

        const token = jwt.sign({id:user.id},"51_Pinga", {expiresIn: '1h'})
        return token;
    }
}
module.exports = new UserService();
