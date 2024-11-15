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

