function getMovies() {
    return fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .catch(error => console.log(error));
}

export default {getMovies}