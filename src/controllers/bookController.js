const express = require('express');
const bookService = require('../services/bookService')

const authenticateToken = require('../middleware/auth')

const router = express.Router();

// {"id": 1, "livro": "1984", "categoria": "Ficção distópica", "autor": "George Orwell"}
router.post('/register', authenticateToken,async (req, res) => {
    try {
        const { name, category, author } = req.body;
        if (!name || !category || !author) {
            return res.status(400).json({ error: 'Pelo menos os campos "name", "category" e "author" precisam ser informados.' });
        }        
        await bookService.register(name, category, author);
        return res.status(200).json({  message: 'Livro criado com sucesso!' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro interno ao criar o livro.' });
    }
});

router.put('/update/:id', authenticateToken,async(req, res)=>{
    try {
        const { id } = req.query;
        const { name, category, author } = req.body;
        
        console.log(`test 03`,name, category, author)
        if (!name && !category && !author) {
            return res.status(400).json({ error: 'Pelo menos um campo ("name", "category", "author") precisa ser informado.' })
        }
        console.log(`test 04`)
        if (!await bookService.getBook(id)) {
            return res.status(404).json({ error: 'Livro não encontrado.' });
        }else{
            await bookService.updateBook(book = { id, name, category, author });            
            return res.status(200).json({book,message: 'Livro Atualizado com sucesso!' })
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro interno ao atualizar o livro.' })
    }
})

router.get('/list', authenticateToken, async(req, res)=>{
    try{
        const book = await bookService.getBooks()
        
        return res.status(200).json({ book, message: 'Get livro efetuada com sucesso!' })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro interno no get o livro.' })
    }
})

router.delete('/delete/:id', authenticateToken, async(req, res)=>{
    try{
        const id = req.params.id
        if (!bookService.getBook(id)) {
            return res.status(404).json({ error: 'Livro não encontrado.' });
        }
        await bookService.deleteBook(id)
        return res.status(200).json({  message: 'Livro deletado com sucesso' });

    }catch(err){
        console.log(`${err}`);
        return res.status(500).json({ error: 'Erro interno ao deletar livro.' })
    }
})

module.exports = router;

