const express = require('express')
const request = require('request');
const app = express() //create server lo hace aquí
const news = require('./modules/news');
const bodyParser = require('body-parser');
const port = 3000



//middleware
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



//nuevo
app.get('/', news.getHome)
app.get('/api/film/:title', news.getFilm)
app.post('/api/film/', news.crearFilm)
app.put('/api/film/',news.modFilm)
app.delete('/api/film/',news.borrarFilm)

app.use(function(req, res, next) {
  return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});

// 500 - Any server error
app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});


app.listen(port, () => {
  console.log(`El servidor es http://localhost:${port}`)
})
