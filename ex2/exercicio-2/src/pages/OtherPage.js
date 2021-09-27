import React from 'react';
import styles from './OtherPage.css';

const OtherPage = () => {
        if(window.location.pathname === '/otherPage1') {
            <div className="blue" style={styles.blue}></div>
        } else {
            <div className="red" style={styles.red}></div>
        }
    return (
        <div>
           
        </div>
    )
}

export default OtherPage;
