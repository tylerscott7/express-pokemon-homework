const express = require('express');
const app = express();
const pokeData = require('./models/pokemon');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
    // css
app.use('/css', express.static('public/css'));

// ROUTING
    // index
app.get('/pokemon', (req,res) => {
    res.render('index.ejs', {
        pokemon: pokeData,
    });
});

    // create (PUT)
app.put('/pokemon/:id', (req,res) => {
    pokeData[req.params.id] = req.body;
    res.redirect('/pokemon');
});

    // delete
app.delete('/pokemon/:id', (req,res) => {
    // update model
    pokeData.splice(req.params.id,1);
    res.redirect('/pokemon');
});

    // edit
app.get('/pokemon/:id/edit', (req,res) => {
    res.render('edit.ejs', {
        pokemon: pokeData[req.params.id],
        pokeId: req.params.id,
    });
});

    // new
app.get('/pokemon/new', (req,res) => {
    res.render('new.ejs', {
        // nothing
    });
});

    // post new to model
app.post('/pokemon', (req,res) => {
    pokeData.push(req.body);
    res.redirect('/pokemon');
});

    // show
app.get('/pokemon/:id', (req,res) => {
    res.render('show.ejs', {
        pokemon: pokeData[req.params.id],
    });
});

app.listen(3000,() => {
    console.log('server is running');
})

module.exports = app;