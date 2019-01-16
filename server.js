const express = require('express');
const app = express();
const pokeData = require('./models/pokemon');

// MIDDLEWARE

// ROUTING
app.use('/css', express.static('public/css'));

app.get('/pokemon', (req,res) => {
    res.render('index.ejs', {
        pokemon: pokeData,
    });
});

app.get('/pokemon/:id', (req,res) => {
    res.render('show.ejs', {
        pokemon: pokeData[req.params.id],
    });
});

app.listen(3000,() => {
    console.log('server is running');
})
