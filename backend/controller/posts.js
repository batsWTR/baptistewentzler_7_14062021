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

      con.query("SELECT posts.id, title, content, creation, pseudo, avatar FROM `posts` INNER JOIN users ON posts.user_id = users.id", (err,result) =>{
        if(err){
            console.log(err)
            return res.status(401).json({message: err})
        }
        console.log(result)
        return res.status(200).json(result)
      })
    con.end()
}

exports.getPostsById = (req,res,next) =>{
  console.log('GET postsById ', req.params.catId)

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
    
  })

  if(req.params.catId == 0){
    con.query("SELECT posts.id, title, content, creation, pseudo, avatar FROM `posts` INNER JOIN users ON posts.user_id = users.id", (err,result) =>{
      if(err){
          console.log(err)
          return res.status(401).json({message: err})
      }
      console.log(result)
      return res.status(200).json(result)
    })
  }else{
    con.query("SELECT posts.id, title, content, creation, pseudo, avatar FROM `posts` INNER JOIN users ON posts.user_id = users.id WHERE category_id = " + req.params.catId + "", (err,result)=>{
      if(err){
        console.log(err)
        return res.status(401).json({message: err})
      }
      console.log(result)
      return res.status(200).json(result)
    })
  }


  

  
}

exports.getUsers = (req,res,next) =>{
  console.log('GET users')

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

  con.query("SELECT * FROM `users`", (err,result) =>{
    if(err){
        console.log(err)
        return res.status(401).json({message: err})
    }
    console.log(result)
    return res.status(200).json(result)
  })

  con.end()
}

exports.createPost = (req,res,next) =>{
  console.log('POST createPost')

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
  console.log(req.body.title, req.body.content, req.body.user, req.body.cat)
  con.query("INSERT INTO `posts`(`title`, `content`,`user_id`, `category_id`) VALUES ('" + req.body.title + "','" + req.body.content + "'," + req.body.user + "," + req.body.cat + ")", (err, result) =>{
    if(err){
      console.log(err)
      return res.status(401).json({message: err})
    }

    return res.status(200).json({msg: 'ok'})

  })
  con.end()
}

exports.getCat = (req,res,next) =>{
  console.log('GET categories')

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

  con.query("SELECT * FROM categories", (err, result) =>{
    if(err){
      console.log(err)
      return res.status(401).json({message: err})
    }

    console.log(result)
    return res.status(200).json(result)
  })

  con.end()
}