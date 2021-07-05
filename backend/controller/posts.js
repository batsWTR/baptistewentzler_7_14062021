var mysql = require('mysql');






exports.headers = (req, res, next)=>{
    console.log('requete Auth');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    next();
}


exports.getPosts = (req,res,next) =>{
    console.log('GET posts')

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

      con.query("SELECT * FROM `posts`", (err,result) =>{
        if(err){
            console.log(err)
            return res.status(401).json({message: err})
        }
        console.log(result)
        res.status(200).json({result})
      })



    
}