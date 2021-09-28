import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';


const Links = () => {
    return (
        <div>
            <BrowserRouter>
                <Link to="/componente1">Componente 1</Link>
                <Link to="/componente2">Componente 2</Link>
            </BrowserRouter>
        </div>
    )
}

export default Links;
