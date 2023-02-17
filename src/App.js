import './App.css';
import Heading from './components/Heading';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
/*import Counter from './components/Counter'*/

const movies = [
  {_id: 1, title: "Madagascar", description: "A group of animals who have spent all their life in a New York zoo end up in the jungles of Madagascar, and must adjust to living in the wild.", year: 2005, genres: ["Animation", "Adventure", "Comedy", "Family"]},
  {_id: 2, title: "The Unforgivable", description: "Ruth Slater is released from prison after serving twenty years for murdering a sheriff who came to evict her and her five-year-old sister, Katie, from their home in Snohomish, Washington. Upon her release, she gets two jobs, and begins to search for her estranged younger sister.", year: 2021, genres: ["Crime", "Drama"]},
  {_id: 3, title: "Who Am I", description: "Benjamin, a young German computer whiz, is invited to join a subversive hacker group that wants to be noticed on the world's stage.", year: 2014, genres: ["Crime", "Drama", "Mystery", "Sci-Fi", "Thriller"]},
  {_id: 4, title: "Mile 22", description: "CIA Agent James Silva leads a top secret CIA Special Activities Division unit, code-named Overwatch, to infiltrate a Russian Federal Security Service (FSB) safe house in the United States.", year: 2018, genres: ["Action", "Thriller"]},
]

function App() {
  return (
    <div className="site-wrapper">
      <Heading>My custom collection</Heading>
      <MovieList movies={movies} className="movie-list"/>
      <Footer />
    </div>
  );
}

export default App;
