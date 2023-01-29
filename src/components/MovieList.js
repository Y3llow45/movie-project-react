import {Component} from 'react'
import Movie from './Movie'

class MovieList extends Component {
    render(){
        return (
            <div className="movie-list">
                <h2>The best movies</h2>
                {this.props.movies.map(x => {
                    return <Movie title={x.title} description={x.description} year={x.year} genres={x.genres}/>
                })}
            </div>
        )
    }
}

export default MovieList