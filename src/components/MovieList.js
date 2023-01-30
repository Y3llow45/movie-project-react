import {Component} from 'react'
import Movie from './Movie'

class MovieList extends Component {
    movieClicked(title) {
        console.log(`The movie ${title} was clicked!`);
    }
    render(){
        return (
            <div className="movie-list">
                <h2>The best movies</h2>
                {this.props.movies.map(x => {
                    return <Movie 
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