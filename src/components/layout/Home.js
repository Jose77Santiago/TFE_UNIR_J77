import React from 'react';
import '../../assets/css/Home.css';
import Header from '../common/HeaderHome.js'
import BloqueMaquinas from '../common/BloqueMaquinas.js'
import MisReservas from '../common/MisReservas.js';
import IbuttonLogin from '../common/ibuttonLogin.js'
import { Link } from 'react-router-dom';
import CerrarSesion from '../../assets/images/cerrar_sesion.png'

function Home() {

    return (
        <div className='completo_home'>
            
            <Header/>

            <div className='body_home'>
            
                <BloqueMaquinas/>

                <MisReservas/>

                <div className='boton_volver'>
                    <Link to={"/"}><IbuttonLogin grande={true} placeholder='Volver'/></Link>
                </div>
            </div>
        
            <footer className='bloque_cerrar_sesion'>
                    <img className='img_cerrar_sesion' src={CerrarSesion} alt='Cerrar Sesión'></img>
                    <div className='text_cerrar_sesion'>Cerrar Sesión</div>
            </footer>
        </div>
    );
  }
  
  export default Home;