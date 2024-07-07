import React from 'react';
import '../../assets/css/HeaderHome.css';
import casa from'../../assets/images/casa.png'
import Menu from '../common/Menu.js'
import Reloj from '../common/Reloj.js'

function Header_Home(){
    return(

    <header className='header_home'>
        <div className='saludo_menu'>
            <div className='bloque_saludo_user'>
                <img className='casa' src={casa} alt="mancuerna"></img>
                <div className='saludo_user'>Hola Laura!</div>
            </div>
            <Menu/>
        </div>
        <h1 className='title_home'>Bienvenido a FitReserveHub</h1>
        <Reloj/>
    </header>

    );
}

export default Header_Home;