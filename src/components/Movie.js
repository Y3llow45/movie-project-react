function Movie(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <h2>{props.year}</h2>
            <h2>{props.genres}</h2>
            <p>{props.description || 'Description is not currently available'}</p>
        </article>
    )
}

export default Movie