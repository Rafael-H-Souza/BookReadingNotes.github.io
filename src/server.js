//jwt.io
const express = require('express')
const swaggerUI = require('swagger-ui-express')
const port = 3000
const userController = require('./controllers/userController')
const bookController = require('./controllers/bookController')
const movieController = require('./controllers/movieController')
const footController = require('./controllers/footController')


const app = express()
app.use(express.json())
app.use('/api/user', userController);
app.use('/api/book', bookController);
app.use('/api/movie', movieController);
app.use('/api/foot', footController);
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(require('./swagger.json')));


app.listen( port, () =>{
    console.log('Servidor rodando na porta',port)
})