const bookRepository = require('../repositories/bookRepository')

class BookService {
    async register(name, category, author){        
        return await bookRepository.createUser({name, category, author})
    }
    async updateBook(book){       
        await bookRepository.updateUser(book)
       
    }    
    async getBooks(){
        return await bookRepository.findAll()
    }
    async getBook(id){
        return await bookRepository.findByBookId({id})
    }
    async deleteBook(id) {
        await bookRepository.deleteByBookId({id})        
    }
    
    
}
module.exports = new BookService();
