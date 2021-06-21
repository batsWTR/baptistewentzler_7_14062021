const express = require('express');
const parser = require('body-parser');

const auth = require('./routes/auth');





const app = express();

app.use(express.json());
app.use('/api/auth', auth);





app.listen(3000, () =>{
    console.log("Ecoute sur le port 3000")
})