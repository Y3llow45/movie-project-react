import './App.css';
import Heading from './components/Heading';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
/*import Counter from './components/Counter'*/



function App() {
  return (
    <div className="site-wrapper">
      <Heading>My custom collection</Heading>
      <MovieList className="movie-list"/>
      <Footer />
    </div>
  );
}

export default App;
