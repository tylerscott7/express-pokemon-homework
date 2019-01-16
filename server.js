const express = require('express');
const app = express();
const pokeData = require('./models/pokemon');

//MIDDLEWARE

app.get('/pokemon', (req,res) => {
    res.send(pokeData);
});

app.listen(3000,() => {
    console.log('server is running');
})
