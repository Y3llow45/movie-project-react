function Movie(props) {
    if(!props.title) {
        return (
            <article><p>No information provided</p></article>
        );
    }
    return (
        //<article onClick={() => console.log(`${props.title} is clicked!`)}>
        <article className="movie-article">
            <h1 className="text" onClick={props.clickHandler}>{props.title}</h1>
            <h3 className="text">{props.year || 'Default year'}</h3>
            <h4 className="text">{props.genres.join(', ') || 'Default genres'}</h4>
            <p className="text">{props.description || 'Default description'}</p>
        </article>
    )
}

export default Movie