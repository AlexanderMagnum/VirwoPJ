const user       = require('./auth.dao');
const jwt        = require('jsonwebtoken');
const bcrypt     = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';

exports.createUser = (req, res, next) => {
    const newUser  = {
        name:     req.body.name,
        email:    req.body.email,
        password: req.body.password
    }

    user.create (newUser, (err, user)=>{
        if (err) return res.status(500).send('Server error');
        const expiresIn  = 24 * 60;
        const accesToken = jwt.sign({id: user.id},
            SECRET_KEY,{
                expiresIn: expiresIn
            });
        //response
        res.send({ user }); 
    });
}

exports.loginUser = (req, res, next) => {
    //Información que viene del FrontEnd
    const userData = {
        email:    req.body.email,
        password: req.body.password
    }
    //Busca en la base de datos si existe el usuario
    user.findOne({email: userData.email}, (err, user) =>{ //Dado por mongoose //err, user "Promesa"
        if (err) return res.status(500).send('Server Error!'); //Si existe error muestra en el frontend status 500
        if (!user){
            //No existe el email
            res.status(409).send({message: 'Algo salio mal'}); //Si no encuentra el usuario devuelve codigo 409
        }else{
            const resultPassword = userData.password;
            if(resultPassword){
                const expiresIn = 24 * 60;
                const accesToken = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: expiresIn});
                res.send({ userData });
            }else{
                // Contraseña incorrecta
                res.status(409).send({message: 'Algo malio sal :C'}); //Contraseña incorrecta envía codigo 409
            }
        }

    });

}