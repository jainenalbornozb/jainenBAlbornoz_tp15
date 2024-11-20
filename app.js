const peliculasFavoritas = require('./peliculas');
const fs = require('fs');

console.log("🎥 Nuestras películas favoritas 🎥")

peliculasFavoritas.forEach((pelicula) => {
    console.log(`ID: ${pelicula.id}`);
    console.log(`Título: ${pelicula.titulo}`);
    console.log(`Director: ${pelicula.director}`);
    console.log(`Calificación: ${pelicula.rating}`);
    console.log(`Premios: ${pelicula.awards.join(', ')}`);
    console.log(`Duración: ${pelicula.length} minutos`);
    console.log(`Precio: $${pelicula.price}`);
    console.log(`Género: ${pelicula.genre}`);
    console.log('------------------------------------');
  });

  let mensajeTexto = './mensaje.txt'
  
  fs.readFile(mensajeTexto, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }
    console.log('Contenido del archivo mensaje.txt:');
    console.log(data);
  });


