const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bookRepository = require('../repositories/bookRepository')

class BookService {
    async register(name, category, author){
        // name, category, author         
        const book = await bookRepository.createUser({name, category, author})
        return book;
    }
    async getBooks(){
        return  bookRepository.findAll()
    }
    async getBook(name){
        return  bookRepository.findByBookName(name)
    }
    async deleteBook(id) {
        return bookRepository.deleteByBookId(id)        
    }
    
}
module.exports = new BookService();
