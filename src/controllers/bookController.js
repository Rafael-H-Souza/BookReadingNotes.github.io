const express = require('express');
const bookService = require('../services/bookService')

const router = express.Router();

// {"id": 1, "livro": "1984", "categoria": "Ficção distópica", "autor": "George Orwell"}
router.post('/register', async (req, res)=>{
    try{
        const {name, category, author } = req.body;
        const book = await bookService.register( name, category, author )
        res.json(book);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
});

router.delete('/delete/:id', async(req, res)=>{
    try{
        const bookId = req.params.id
        console.log(bookId)
        const deleteBook = await bookService.deleteBook(bookId);
        if (!deleteBook) {
            
            return res.status(404).json({ erro: 'Livro não encontrado' });
        }
        res.status(200).json({ message: 'Livro deletado com sucesso' });

    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
})

router.put('/update/:id', async(req, res)=>{
    try{
        const bookId = req.params.id
        console.log(bookId)
        const updateBook = await bookService.updateBook(bookId);
        if (!updateBook || id < 0) {            
            return res.status(404).json({ erro: 'Livro não encontrado' });
        }
        res.status(200).json({ message: 'Livro deletado com sucesso' });

    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
})

router.get('/book', async(req, res)=>{
    try{
        const book = await bookService.getBooks()
        res.json(book);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
})

module.exports = router;

