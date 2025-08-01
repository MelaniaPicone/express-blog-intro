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

// definisco la rotta bacheca
app.get('/bacheca', (req, res) => {
const bacheca = [
{
  name: "Espeon",
  content: "Psycho",
  image: "/img/espeon.jpg",
  tags: ["pokemon", "psycho", "cute", "purple"],
}, 

{
  name: "Glaceon",
  content: "Ice",
  image: "/img/glaceon.jpg",
  tags: ["pokemon", "ice", "cute", "white"],
},

{
  name: "Leafeon",
  content: "Grass",
  image: "/img/leafeon.jpg",
  tags: ["pokemon", "grass", "cute", "green"],
},

{
  name: "Sylveon",
  content: "Poison",
  image: "/img/sylveon.jpg",
  tags: ["pokemon", "poison", "cute", "pink"],
},

{
  name: "Umbreon",
  content: "Dark",
  image: "/img/umbreon.jpg",
  tags: ["pokemon", "dark", "cute", "lightpurple"],
}
];

res.json(bacheca);

});


// dico al server di rimanere in ascolto
app.listen(port, () => { console.log(`Server del mio blog sulla porta ${port}`) }); 

