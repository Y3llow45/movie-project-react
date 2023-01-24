import './App.css';
import Heading from './components/Heading';
import MovieList from './components/MovieList';

const movies = [
  {title: "Madagascar", description: "Group of friends escape the zoo. Where will they go?"},
  {title: "The Unforgivable", description: "Ruth Slater is released from prison after serving twenty years for murdering a sheriff who came to evict her and her five-year-old sister, Katie, from their home in Snohomish, Washington. Upon her release, she gets two jobs, and begins to search for her estranged younger sister."},
  {title: "WhoAmI", description: "Benjamin, a young German computer whiz, is invited to join a subversive hacker group that wants to be noticed on the world's stage."},
  {title: "Mile 22", description: "CIA Agent James Silva leads a top secret CIA Special Activities Division unit, code-named Overwatch, to infiltrate a Russian Federal Security Service (FSB) safe house in the United States."}
]

function App() {
  return (
    <div className="site-wrapper">
      <Heading />
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
