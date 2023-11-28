const movies = require('../src/data.js');

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter((movie) => movie.director == director);
  console.log('EXERCISE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(director) {
  let moviesFromDirector = movies.filter((movie) => movie.director == director);
  if (moviesFromDirector.length === 0) {
    // Return NaN if there are no movies from the director
    return NaN;
  }
  let totalScore = moviesFromDirector.reduce(
    (accTotal, movie) => accTotal + movie.score,
    0
  );
  let averageScore = totalScore / moviesFromDirector.length;
  let result = averageScore.toFixed(2);
  console.log('EXERCICE 3 ->', result);
  return result;
}

// Exercise 4: Alphabetic order by title
function orderAlphabetically(movies) {
  let result = movies
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);

  console.log('EXERCISE 4 ->', result);
  return result;
}

// Explicación:

/* .map((movie) => movie.title): 
Crea un nuevo array que contiene solo los títulos de las películas. El método map itera sobre cada objeto de la matriz movies y extrae el valor de la propiedad title, devolviendo un nuevo array con estos títulos.

.sort(): 
Ordena alfabéticamente el array de títulos. La función sort ordena los elementos de un array en su lugar y devuelve el array ordenado. En este caso, los títulos se ordenan alfabéticamente en orden ascendente.

.slice(0, 20): 
Toma los primeros 20 elementos del array ordenado. Si hay menos de 20 elementos, toma todos los elementos. Esto se hace para cumplir con el requisito de devolver los primeros 20 títulos después de ordenar alfabéticamente.

*/

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let result = [
    ...movies
      .map((movie) => movie)
      .sort((a, b) => {
        // Compara por año
        if (a.year !== b.year) {
          return a.year - b.year;
        } else {
          return a.title.localeCompare(b.title);
        }
      })
  ];
  console.log('EXERCICE 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {
  let result = movies
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);

  console.log('EXERCISE 4 ->', result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
