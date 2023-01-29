function Movie(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <p>{props.description || 'Description is not currently available'}</p>
        </article>
    )
}

export default Movie