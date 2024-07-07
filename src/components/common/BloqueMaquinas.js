import React from 'react';
import '../../assets/css/BloqueMaquinas.css';
import Maquina from '../common/MaquinaHome.js'
import Cinta from '../../assets/images/cinta.png'
import Eliptica from '../../assets/images/eliptica.png'
import Bici from '../../assets/images/bici.png'
import Multi from '../../assets/images/multipower.png'
import Musculacion from '../../assets/images/musculacion.png'

function BloqueMaquinas() {

    return (
        <div className='main_bloque_maquinas'>
            <h1 style={{fontSize:35, marginBottom:'3%'}}>Selecciona la actividad a reservar</h1>
            <div className='bloque_maquinas'>
                <Maquina imagen={Cinta}
                        alt_text='Cinta de Correr'
                        text='Cinta de Correr' />
                <Maquina imagen={Eliptica}
                        alt_text='Elíptica'
                        text='Elíptica'/>
                <Maquina imagen={Bici}
                        alt_text='Bicicleta Estática'
                        text='Bicicleta Estática'/>
                <Maquina imagen={Multi}
                        alt_text='Multi Estación'
                        text='Multi Estación'/>
                <Maquina imagen={Musculacion}
                        alt_text='Zona musculación'
                        text='Zona musculación'/>
            </div>
        </div>
    );
  }
  
  export default BloqueMaquinas;