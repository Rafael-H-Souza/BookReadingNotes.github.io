const express = require('express');
const footService = require('../services/footService')

const authenticateToken = require('../middleware/auth')

const router = express.Router();

// time, nameTime, player, position, numberPlayer
router.post('/register', authenticateToken,async (req, res) => {
    try {
        const {  time, nameTime, player, position, numberPlayer} = req.body;
        if ( !time || !nameTime || !player || !position || !numberPlayer) {
            return res.status(400).json({ error: 'Pelo menos os campos  "time", "nameTime", "player", "position", "numberPlayer" precisam ser informados.' });
        }        
        await footService.register( time, nameTime, player, position, numberPlayer);
        return res.status(200).json({  message: 'Dados de Football criado com sucesso!' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro interno ao criar  dado de football.' });
    }
});

router.put('/update/:id', authenticateToken,async(req, res)=>{
    try {
        const { id } = req.query;
        const {  time, nameTime, player, position, numberPlayer } = req.body;
        
        
        if ( !time || !nameTime || !player || !position || !numberPlayer) {
            return res.status(400).json({ error: 'Pelo menos um campo ("time", "nameTime", "player", "position", "numberPlayer") precisa ser informado.' })
        }
        
        if (!await footService.getFoot(id)) {
            return res.status(404).json({ error: 'Dados de Football não encontrado.' });
        }else{
            await footService.updateFook(foot = { time, nameTime, player, position, numberPlayer });            
            return res.status(200).json({foot,message: 'Dados de Football Atualizado com sucesso!' })
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro interno ao atualizar os Dados de Football.' })
    }
})

router.get('/list', authenticateToken, async(req, res)=>{
    try{
        const book = await footService.getBooks()
        
        return res.status(200).json({ book, message: 'Get livro efetuada com sucesso!' })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro interno no get o livro.' })
    }
})

router.delete('/delete/:id', authenticateToken, async(req, res)=>{
    try{
        const id = req.params.id
        if (!footService.getBook(id)) {
            return res.status(404).json({ error: 'Dados de Football não encontrado.' });
        }
        await footService.deleteFoot(id)
        return res.status(200).json({  message: 'Dados de Football deletado com sucesso' });

    }catch(err){
        console.log(`${err}`);
        return res.status(500).json({ error: 'Erro interno ao deletar os Dados de Football.' })
    }
})

module.exports = router;

