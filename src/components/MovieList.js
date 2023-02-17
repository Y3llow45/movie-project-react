import {Component} from 'react'
import Movie from './Movie'
import movieService from './services/movieService'

class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    movieClicked(title) {
        console.log(`The movie ${title} was clicked!`);
    }

    componentDidMount() {
        movieService.getMovies()
            .then(movies => {
                this.setState(() => ({movies}))
            })
    }

    render(){
        if(this.state.movies.length == 0) {
            return <span>Loading movies...</span>
        }
        return (
            <div className="movie-list">
                {this.state.movies.map((x, index) => {
                    return <Movie 
                        key={x._id}
                        title={x.title}
                        description={x.description}
                        year={x.year} 
                        genres={x.genres} 
                        clickHandler={() => this.movieClicked(x.title)} />
                })}
            </div>
        )
    }
}

export default MovieList