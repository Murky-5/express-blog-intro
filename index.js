/*

Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog” ✔
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe) ✔
Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post. ✔
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post. ✔
Testare su postman ✔

*/


// server
const hostname = "127.0.0.1"
const port = 3000


// ```js```
const express = require('express')
const app = express()
const memePosts = require('./posts.js')

// starts a simple http server locally on port 3000
app.get('', (req, res) => {
    res.send("Server del mio blog")
});

app.get('/bacheca', (req, res) => {
    res.send(memePosts)
})

app.listen(port, `${hostname}`, () => {
    console.log(`Listening on http://${hostname}:${port}/`);
  });


