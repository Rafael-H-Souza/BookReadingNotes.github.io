const Movie = require('../models/movie');

class MovieRepository {
    async createMovie(movie) {
        return await Movie.create(movie);
    }

    async findByMovieName(name) {
        return await Movie.findOne({ where: { name } });
    }

    async deleteByMovieId(id) {
        return await Movie.destroy({ where: {id} });
    }

    async findAll() {
        return await Movie.findAll();
    }
}

module.exports = new MovieRepository();