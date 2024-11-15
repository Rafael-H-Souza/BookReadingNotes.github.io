const movieRepository = require('../repositories/movieRepository')

class MovieService {
    async register(name, gender, director){        
        const movie = await movieRepository.createMovie({name, gender, director})
        return movie;
    }
    async getMovies(){
        return movieRepository.findAll()
    }
    async getMovie(name){
        return movieRepository.findByMovieName(name)
    }
    async deleteMovie(id) {
        return movieRepository.deleteByMovieId(id)        
    }
}
module.exports = new MovieService();
