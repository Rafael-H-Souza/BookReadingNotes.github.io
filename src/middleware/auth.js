const jwt = require('jsonwebtoken')
const secretKey ='51_Pinga'

function authenticateToken(req, res, next){
    const authHeader = req.header('Authorization')?.split(' ')[1]
    console.log('test 01')
    if(!authHeader){
        console.log('test 02')
        return res.status(403).json({ erro: 'Token ausente.' });
    }

    jwt.verify(authHeader,secretKey, (err , user )=>{
        
        req.user = user
        if(err){
            console.log(`test 03',${err}`)
            return res.status(403).json(`${err}, Token inválido ou malformado.`);
        
        }

        next()
    })
}

module.exports = authenticateToken; 