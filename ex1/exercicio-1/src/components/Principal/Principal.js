import React, { useState } from 'react';
import Button from '../Button/Button';

const Principal = () => {
    const [texto, setTexto] = useState('');

    function handleClick() {
        console.log('clicou')
    }
    function handleChange(e) {
        setTexto(e.target.value)
    }
    
        
  
    return (
        <div>
            <input type="text" id="texto" value={texto} onChange={handleChange}></input>
            <Button handleClick={handleClick} value={texto} />
        </div>
    )
}

export default Principal;
