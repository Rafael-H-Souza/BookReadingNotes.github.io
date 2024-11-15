const Book = require('../models/book');

class BookRepository {
    async createUser(book) {
        console.log("testeCrieate")
        return await Book.create(book);
    }

    async findByBookName(name) {
        return await Book.findOne({ where: { name } });
    }

    async deleteByBookId(id) {
        console.log("tentei")
        return await Book.destroy({ where: {id} });
    }

    async findAll() {
        return await Book.findAll();
    }
}
// Exporta uma instância do UserRepository
module.exports = new BookRepository();