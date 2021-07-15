var mysql = require('mysql');
const env = require('dotenv').config();

var mysqlLogin = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB
}




exports.headers = (req, res, next)=>{
    console.log('requete Auth');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    next();
}


exports.getPosts = (req,res,next) =>{
    console.log('GET posts')

    var con = mysql.createConnection(mysqlLogin);

      con.connect((err) => {
        if (err){
            return res.status(401).json({message: 'impossible de se connecter à la BDD'})
        }
        console.log("Connecté à la base de donnée");
        
      });

      con.query("SELECT posts.id, posts.user_id, title, content, creation, pseudo, avatar FROM `posts` INNER JOIN users ON posts.user_id = users.id ORDER BY creation DESC", (err,result) =>{
        if(err){
            console.log(err)
            con.end()
            return res.status(401).json({message: err})
        }
        console.log(result)
        con.end()
        return res.status(200).json(result)
      })
    
}

exports.getPostsById = (req,res,next) =>{
  console.log('GET postsById ', req.params.catId)

  var con = mysql.createConnection(mysqlLogin);

  con.connect((err) => {
    if (err){
        return res.status(401).json({message: 'impossible de se connecter à la BDD'})
    }
    console.log("Connecté à la base de donnée");
    
  })

  if(req.params.catId == 0){
    con.query("SELECT posts.id, posts.user_id, title, content, creation, pseudo, avatar FROM `posts` INNER JOIN users ON posts.user_id = users.id ORDER BY creation DESC", (err,result) =>{
      if(err){
          console.log(err)
          con.end()
          return res.status(401).json({message: err})
      }
      console.log(result)
      con.end()
      return res.status(200).json(result)
    })
  }else{
    con.query("SELECT posts.id, title, content, creation, pseudo, avatar FROM `posts` INNER JOIN users ON posts.user_id = users.id WHERE category_id = " + req.params.catId + " ORDER BY creation DESC", (err,result)=>{
      if(err){
        console.log(err)
        con.end()
        return res.status(401).json({message: err})
      }
      console.log(result)
      con.end()
      return res.status(200).json(result)
    })
  }


  

  
}

exports.getUsers = (req,res,next) =>{
  console.log('GET users')

  var con = mysql.createConnection(mysqlLogin);

  con.connect((err) => {
    if (err){
        return res.status(401).json({message: 'impossible de se connecter à la BDD'})
    }
    console.log("Connecté à la base de donnée");
    
  });

  con.query("SELECT * FROM `users`", (err,result) =>{
    if(err){
        console.log(err)
        con.end()
        return res.status(401).json({message: err})
    }
    console.log(result)
    con.end()
    return res.status(200).json(result)
  })
}

exports.createPost = (req,res,next) =>{
  console.log('POST createPost')

  var con = mysql.createConnection(mysqlLogin);

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
      con.end()
      return res.status(401).json({message: err})
    }

    con.end()
    return res.status(200).json({message: 'ok'})

  })
}

exports.getCat = (req,res,next) =>{
  console.log('GET categories')

  var con = mysql.createConnection(mysqlLogin);

  con.connect((err) => {
    if (err){
        return res.status(401).json({message: 'impossible de se connecter à la BDD'})
    }
    console.log("Connecté à la base de donnée");
    
  });

  con.query("SELECT * FROM categories", (err, result) =>{
    if(err){
      console.log(err)
      con.end()
      return res.status(401).json({message: err})
    }

    console.log(result)
    con.end()
    return res.status(200).json(result)
  })
}

exports.addCategory = (req, res, next) =>{
  console.log('Ajout categorie')

  var con = mysql.createConnection(mysqlLogin);

  con.connect((err) => {
    if (err){
        return res.status(401).json({message: 'impossible de se connecter à la BDD'})
    }
    console.log("Connecté à la base de donnée");
    
  });

  console.log(req.body.category)

  con.query("INSERT INTO categories (name) VALUES ('" + req.body.category + "')", (err,result) =>{
    if(err){
      console.log(err)
      con.end()
      return res.status(401).json({message: err})
    }
    con.end()
    return res.status(200).json({message: 'ok'})
  })

  
}

exports.addComment = (req, res, next) =>{
  console.log('Ajout commentaire')

  console.log('User_id: ', req.body.userId)
  console.log('Post id: ', req.body.postId)
  console.log('Comment: ', req.body.comment)

  var con = mysql.createConnection(mysqlLogin)

  con.connect((err) => {
    if (err){
        return res.status(401).json({message: 'impossible de se connecter à la BDD'})
    }
  })
    

  con.query("INSERT INTO comments (comment, user_id, post_id) VALUES ('" + req.body.comment + "'," + req.body.userId + "," + req.body.postId + ")", (err,result) =>{
      if(err){
        console.log(err)
        con.end()
        return res.status(401).json({message: err})
      }
      con.end()
      return res.status(200).json({message: 'ok'})
  })
}

exports.getComment = (req, res, next) =>{
  console.log('Commentaire pour post: ', req.params.id)

  var con = mysql.createConnection(mysqlLogin);

  con.connect((err) => {
    if (err){
        return res.status(401).json({message: 'impossible de se connecter à la BDD'})
    }
    console.log("Connecté à la base de donnée");
    
  })

  con.query("SELECT `pseudo`, `comment`, `user_id`, `post_id`, `creation` FROM `comments`  LEFT JOIN users ON comments.user_id = users.id WHERE post_id =" + req.params.id + " ORDER BY creation DESC", (err,result) =>{
    if(err){
      console.log(err)
      con.end()
      return res.status(401).json({message: err})
    }

    console.log(result)
    con.end()
    return res.status(200).json(result)
  })

  
}
  
