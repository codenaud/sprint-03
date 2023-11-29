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
function moviesAverageOfDirector(movies, director) {
  let moviesFromDirector = movies.filter(
    (movie) => movie.director === director
  );
  let totalScore = 0;
  for (let i = 0; i < moviesFromDirector.length; i++) {
    totalScore += moviesFromDirector[i].score;
  }

  let result = Number(totalScore / moviesFromDirector.length.toFixed(2));
  console.log('EXERCISE 3 ->', result);
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
function moviesAverageByCategory(movies, genre) {
  let moviesByCategory = movies.filter((movie) => movie.genre.includes(genre));

  let totalScore = 0;
  for (let i = 0; i < moviesByCategory.length; i++) {
    totalScore += moviesByCategory[i].score;
  }

  let averageScore = totalScore / moviesByCategory.length;
  let result = Math.round(averageScore * 100) / 100; // Redondear a dos decimales
  console.log('EXERCISE 6 ->', result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  // Utilize map to create a new array without modifying the original
  let result = movies.map((movie) => {
    // Create a copy of the movie object to avoid modifying the original
    const newMovie = { ...movie };

    // Extract hours and minutes from the duration property using a regular expression
    const match = newMovie.duration.match(/(\d+)\s*h(?:\s*(\d+)\s*min)?/);

    if (match) {
      // Convert hours and minutes to integer values
      const hours = parseInt(match[1], 10) || 0;
      const minutes = parseInt(match[2], 10) || 0;

      // Calculate total minutes considering durations exceeding 60 minutes
      const totalMinutes = hours * 60 + minutes;

      // Update the "duration" property in the movie copy
      newMovie.duration = totalMinutes;

      return newMovie;
    } else {
      // Handle invalid or incorrect format
      console.error(`Invalid time format for movie "${newMovie.title}"`);
      return newMovie;
    }
  });

  console.log('EXERCISE 7 ->', result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  // Filter movies by year
  let moviesByYear = movies.filter((movie) => movie.year === year);

  // Check if there are no movies for the given year
  if (moviesByYear.length === 0) {
    console.error(`No movies found for the year ${year}`);
    return null;
  }

  // Sort movies by score in descending order
  let scoreSortedMoviesByYear = moviesByYear.sort((a, b) => b.score - a.score);

  // Return the first movie (highest-rated) as an array
  let result = [scoreSortedMoviesByYear[0]];
  console.log('EXERCISE 8 ->', result);
  return result;
}

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
