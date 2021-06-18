
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = require('dotenv').config();



exports.headers = (req, res, next)=>{
    console.log('requete Auth');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    next();
}

// verifie les donnees et renvoie un token {email: 'chaine', password: 'chaine'} renvoie {userId: 'chaine', token: 'chaine'}
exports.login = (req, res, next)=>{
    console.log('login');

    /* regarde si email existe dans la base
    userSchem.findOne({email: req.body.email}, (err,obj)=>{
        if(!obj){
            return res.status(401).json({message: 'Email inconnu'});
        }

        bcrypt.compare(req.body.password, obj.password, (err,result)=>{
            if(!result){
                return res.status(401).json({message: 'mot de passe non valide'});
            }
            res.status(200).json({userId: obj.userId, token: jwt.sign({userId: obj.userId}, 'secret_key', {expiresIn: '2h'})});
        });
        
    });
    */
   console.log("email ",req.body.email,"/ password ",req.body.password);
   res.status(200).json({message: "ok"});
        
    
}

// ajout  utilisateur a la db  {email: 'chaine', password: 'chaine'} renvoie {message: 'chaine'}
exports.signup = (req, res, next)=>{
    console.log('signup');

    // verifie la validite de l'email
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!req.body.email.match(regex)){
        return res.status(401).json({message: 'Email non valide'});
    }

    // verifie la longueur du mot de passe
    if(req.body.password.length < 6 || req.body.password.length > 25){
        return res.status(401).json({message: "Le mot de passe doit contenir de 6 à 25 caractères"});
    }

    
    // cryptage mot de passe
    bcrypt.hash(req.body.password, 10, (err,hash)=>{
        if(err){
            return res.status(401).json({message: err});
        }

        /* crée un nouvel utilisateur
        const user = new userSchem({
        email: req.body.email,
        password: hash,
        userId: ""
        });*/

        console.log("email ",req.body.email,"/ password ",req.body.password, "/ hash ",hash, "/ pseudo ", req.body.pseudo);
        /*user.userId = user._id;
        user.save().then(()=>{res.status(201).json({message: 'creation utilisateur'})}).catch((err)=>{res.status(401).json({message: err})});
        */
        res.status(200).json( {message: 'ok'});
    });


}


exports.error = (err,req,res,next)=>{
    console.log('ERREUR');

    res.status(418).json({message: 'ERREUR ' + err});
}

