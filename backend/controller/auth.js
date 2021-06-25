
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = require('dotenv').config();
var mysql = require('mysql');


        // connection a la base
        

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

    // connection à la bdd
    var con = mysql.createConnection({
        host: "mysql-bawee.alwaysdata.net",
        user: "bawee",
        password: "W3nTzl3R2020!",
        database: 'bawee_projet7'
      });

      con.connect((err) => {
        if (err){
            return res.status(401).json({message: 'impossible de se connecter à la BDD'})
        }
        console.log("Connecté à la base de donnée");
        
      });

      con.query("SELECT * FROM users WHERE mail =  '" + req.body.email + "'", (err, result) =>{
          if(err){
              console.log(err)
              return res.status(401).json({message: err})
          }
          if(!result[0]){
              console.log('pas dans la base')
              return res.status(200).json({erreur: "Vous n'etes pas inscrit"});
          }
          console.log(result[0])

          bcrypt.compare(req.body.password,result[0].mdp, (err,resultat) =>{
            if(!resultat){
                console.log("mdp non valide")
                return res.status(200).json({erreur: 'mot de passe non valide'});
            }
            console.log('le mot de passe est valide')
            //res.status(200)
            res.status(200).json({userId: result[0].id, pseudo: result[0].pseudo, email:result[0].mail, token: jwt.sign({userId:result[0].id}, 'secret_key', {expiresIn: '2h'})});
            })
        })
}



// ajout  utilisateur a la db  {email: 'chaine', password: 'chaine'} renvoie {message: 'chaine'}
exports.signup = (req, res, next)=>{
    console.log('signup');

    // verifie la validite de l'email
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!req.body.email.match(regex)){
        return res.status(200).json({erreur: 'Email non valide'});
    }

    // verifie la longueur du mot de passe
    if(req.body.password.length < 6 || req.body.password.length > 25){
        return res.status(200).json({erreur: "Le mot de passe doit contenir de 6 à 25 caractères"});
    }

    
    // cryptage mot de passe
    bcrypt.hash(req.body.password, 10, (err,hash)=>{
        if(err){
            return res.status(401).json({message: err});
        }
        var con = mysql.createConnection({
            host: "mysql-bawee.alwaysdata.net",
            user: "bawee",
            password: "W3nTzl3R2020!",
            database: 'bawee_projet7'
          });
          
          con.connect((err) => {
            if (err){
                return res.status(401).json({erreur: 'impossible de se connecter à la BDD'})
            }
            console.log("Connecté à la base de donnée");
            
          });

        console.log("email ",req.body.email,"/ password ",req.body.password, "/ hash ",hash, "/ pseudo ", req.body.pseudo);
      

        // envoie de la requete à la base
        con.query("INSERT INTO users VALUES (0,'" + req.body.pseudo + "','" + req.body.email + "','" + hash + "',0)", function(err,result){
            if(err){
                console.log(err.sqlMessage);
                if(err.sqlMessage.match('mail')){
                    return res.status(200).json({erreur: 'Cette adresse mail existe deja'});
                }
                else if(err.sqlMessage.match('pseudo')){
                    return res.status(200).json({erreur: 'Ce pseudo est deja pris, choisissez en un autre'});
                }
                return res.status(200).json({erreur: err.sqlMessage});
            }
            console.log("Votre compte a été crée");
            return res.status(200).json( {message: 'OK'});
        });

        
    });


}

exports.updateProfile = (req, res, next) =>{
    console.log('update profile');
    console.log(req.body)
    console.log(req.file)
    console.log(req.email)
    res.status(200).json({message: 'profile updated'})
}
exports.error = (err,req,res,next)=>{
    console.log('ERREUR');

    res.status(418).json({message: 'ERREUR ' + err});
}

