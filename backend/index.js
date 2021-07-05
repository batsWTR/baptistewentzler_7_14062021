const express = require('express');
const parser = require('body-parser');

const auth = require('./routes/auth');
const posts = require('./routes/posts');




const app = express();

app.use(express.json());
app.use('/images', express.static('images'));
app.use('/api/auth', auth);
app.use('/',posts);





app.listen(3000, () =>{
    console.log("Ecoute sur le port 3000")
})