const express = require('express');

const movieService = require('../services/movieService')

const router = express.Router();

router.post('/register',  async (req, res)=>{
    
    try{
        
        console.log(`test 03`)
        const {name, gender, director } = req.body;
        const movie = await movieService.register( name, gender, director )
        res.json(movie);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
});

router.delete('/delete/:id', async(req, res)=>{
    try{
        const movieId = req.params.id
        console.log(movieId)
        const deleteMovie = await movieService.deleteMovie(movieId);
        if (!deleteMovie) {
            
            return res.status(404).json({ erro: 'Filme não encontrado' });
        }
        res.status(200).json({ message: 'Filme deletado com sucesso' });

    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
})

router.put('/update/:id', async(req, res)=>{
    try{
        const movieId = req.params.id
        console.log(movieId)
        const updateMovie = await movieService.updateBook(movieId);
        if (!updateMovie || id < 0) {            
            return res.status(404).json({ erro: 'Filme não encontrado' });
        }
        res.status(200).json({ message: 'Filme deletado com sucesso' });

    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
})

router.get('/movie', async(req, res)=>{
    try{
        const movie = await movieService.getMovies()
        res.json(movie);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
})

module.exports = router;

