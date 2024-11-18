const Book = require('../models/book');

class BookRepository {
    async createUser(book) {
       return await Book.create(book);
    }

    async updateUser(book) {
        await Book.update({ name: book.name, category: book.category, author: book.author},{ where: { id: book.id } })        
    }

    async findByBookId(book) {
        await Book.findOne({ where: { id: book.id } });
    }
    
    async deleteByBookId(book) {
        await Book.destroy({ where: { id: book.id } });
    }
    async findByBookId(book) {
        return await Book.findOne({ where: { id: book.id } });
    }

    async findAll() {
        return await Book.findAll();
    }
}
// Exporta uma instância do UserRepository
module.exports = new BookRepository();