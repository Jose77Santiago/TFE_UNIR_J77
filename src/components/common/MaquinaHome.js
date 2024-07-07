import React from 'react';
import '../../assets/css/MaquinaHome.css';

function MaquinaHome({imagen, alt_text, text}) {

    return (
        <div className='completo_maquina'>
            <img className='img_maquina' src={imagen} alt={alt_text}></img>
            <div className='text_maquina'>{text}</div>
        </div>
    );
  }
  
  export default MaquinaHome;