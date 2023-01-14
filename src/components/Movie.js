function Movie(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    )
}

export default Movie