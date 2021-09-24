import React from 'react';
import { Link, Router } from 'react-router-dom';
import OtherPage from './OtherPage';

const HomePage = () => {
    return (
        <div>
            <Link to="/otherPage1">teste</Link>
            <Link to="/otherPage2">teste</Link>
        </div>
    )
}

export default HomePage;
