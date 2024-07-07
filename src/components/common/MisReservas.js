import React from 'react';
import '../../assets/css/MisReservas.css';
import Calendario from '../../assets/images/calendario.png'


function MisReservas() {

    return (
        <div className='main_mis_reservas'>
            <img className='img_mis_reservas' src={Calendario} alt='Reservas'></img>
            <div className='text_mis_reservas'>Mis Reservas</div>
        </div>
    );
  }
  
  export default MisReservas;