
// importo express
const express = require('express');

// definisco app
const app = express ();

// definisco porta dove deve rimanere in ascolto il server
const port = 3000;

// middleware per i file statici
app.use(express.static('public'));

// definisco la rotta base
app.get('/', (req, res) => {res.send('Il mio Blog')});

// dico al server di rimanere in ascolto
app.listen(port, () => { console.log(`Server del mio blog sulla porta ${port}`) });