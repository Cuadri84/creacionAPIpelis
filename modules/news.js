const fetch = require('node-fetch');
const apiKey = 'acfb1cba'


//home
exports.getHome = (req,res) =>{
    throw "cacotas" //esto estalla todo el servidor
    res.status(200)
    .json({name:"james cameron",desc:"titanic"});
}


//GET
exports.getFilm = (req,res) =>{
    let peli =req.params.title;
    let url =`http://www.omdbapi.com/?t=${peli}&apikey=${apiKey}`
    fetch(url)
    .then(data => data.json())
    .then(pelis => {
        
        console.log(pelis)
        res.status(200)
        .json({
            titulo: pelis.Title,
            autor: pelis.Director,
            trama: pelis.Plot
        });
    })
    .catch(e => console.log(e))
   } 


   //POST
exports.crearFilm =(req,res) => {
    res.status(200)
    .json({
        status: "200",
        message: {body:req.body}
    });
}

//PUT
exports.modFilm =(req,res) => {
    res.status(200)
    .json({
        id: "0",
        message: "se ha cambiado titanic"
    });
}

//BORRAR
exports.borrarFilm =(req,res) => {
    res.status(200)
    .json({
        id: "0",
        message: "se ha borrado titanic"
    });
}


// exports.postFilm = (req,res) =>{
//     let pelicula = req.body.pe_li
//     res.redirect(`film/${pelicula}`)
// }
