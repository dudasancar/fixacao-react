import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    const blue = parseInt(1);
    const red = parseInt(2);
    return (
        <div>
            
            <Link to={{pathname: `/otherPage/${blue}`}}>teste</Link>
            <br />
            <Link to={{pathname: `/otherPage/${red}`}}>teste</Link>
            
        </div>
    )
}

export default HomePage;
