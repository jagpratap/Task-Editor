import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="container">
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/"><button className="btn">Back Home</button></Link>
        </div>
    )
}

export default Error