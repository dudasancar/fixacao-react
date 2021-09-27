import React from 'react';

const OtherPage = () => {
     
    return (
        <div>
            if(location.pathname === '/otherPage1') {
                <div className="blue"></div>
            } else {
                <div className="red"></div>
            }
        </div>
    )
}

export default OtherPage;
