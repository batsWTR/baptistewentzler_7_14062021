const express = require('express');
const parser = require('body-parser');
const xss = require('xss-clean');
const helmet = require('helmet');

const auth = require('./routes/auth');
const posts = require('./routes/posts');




const app = express();

app.use(xss())
app.use(helmet())
app.use(express.json());
app.use('/images', express.static('images'));
app.use('/api/auth', auth);
app.use('/api',posts);





app.listen(3000, () =>{
    console.log("Ecoute sur le port 3000")
})