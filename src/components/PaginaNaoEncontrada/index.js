import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="divMainContainer">
            <p>Oh n�o!! N�o foi possivel encontrar essa p�gina, <Link to="/">retorne para a Home</Link></p>

        </div>
        )
}

export default Home