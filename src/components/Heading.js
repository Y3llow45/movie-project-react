function Heading(props) {
    return (
        <div>
        <header>
            <h1 className="heading-text">{props.children}</h1>
        </header>
        <h2 className="heading-subtext">The best movies:</h2>
        </div>
    )
}

export default Heading;