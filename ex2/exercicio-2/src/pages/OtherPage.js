import React from 'react';

const OtherPage = (props) => {
    const azul = props.match.params.blue;
    const vermelho = props.match.params.red;
    console.log(azul)
        
    return (
        <>
           {azul === '1' ? 
           (<div style={{background: 'blue'}}>azul</div>) 
           : 
           (<div style={{background: 'red'}}>vermelho</div>)
           }
        </>
    )
}

export default OtherPage;
