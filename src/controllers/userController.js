const express = require('express');
const authenticateToken = require('../middleware/auth')
const userService = require('../services/userService')

const router = express.Router();

router.post('/register', async (req, res)=>{
    try{
        const {username, password} = req.body;
        const user = await userService.register(username, password)
        res.json(user);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
});

router.post('/login', async(req, res)=>{
    try{
        const {username, password} = req.body;
        const token =  await userService.login(username, password)
        res.json(token);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
});
router.put('/updatePassword',authenticateToken, async(req, res)=>{
    try{
        const {username, password, newPassword, confirmNewPassword} = req.body;
        if (!newPassword || !confirmNewPassword || confirmNewPassword !== newPassword) {
            return res.status(400).json({ error: 'Nova senha e a confirmação não são validas ou compartiveis ' });
        }
        const token =  await userService.login(username, password)
        if(!token){
            return res.status(400).json({ error: 'Acesso invalido, não é possivel alterar a senha' });
        }else{
            
        }
        const user = await userService.getUser(username)
        console.log(user.id)
        console.log(token)

        
        
        res.json(token);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
});

router.get('/user',authenticateToken,async(req, res)=>{
    try{
        const users = await userService.getUsers()
        res.json(users);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
})
module.exports = router;

