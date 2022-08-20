import { Link } from "react-router-dom"

export const Inicio = () => {
    return (
        <div>
            <h1>Pagina inicial 2</h1>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/login">Login</Link>
        </div>
        
    )
}