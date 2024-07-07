import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Login.css';
import mancuerna from '../../assets/images/mancuerna_icon.png';
import user from '../../assets/images/user.png';
import password from '../../assets/images/password.png';
import ItextLogin from '../common/itextLogin';
import IbuttonLogin from "../common/ibuttonLogin";

function Login() {

    return (
        <div className="main">
            <header className="header">
                <img className="mancuerna1" src={mancuerna} alt="mancuerna"></img>
                <div className="bienvenida">Bienvenido a la Web FitReserveHub para la reserva de dotaciones del Gimnasio de la Comunidad de Propietarios de Adelfas</div>
                <img className="mancuerna2" src={mancuerna} alt="mancuerna"></img>
            </header>
            <div className="bloque_sesion">
                <h1 style={{fontSize:50}}>Iniciar Sesión</h1>
                <form className="formulario_login">
                    
                    <ItextLogin 
                        id="nombre" 
                        imagen={user} 
                        placeholder={"BloquePisoLetra"} 
                    />
                    <ItextLogin 
                        id="pass" 
                        imagen={password} 
                        placeholder={"Contraseña"} 
                        password={true}
                    />
                
                    <div className="bloque_b_login">
                        <Link to={"/home"}><IbuttonLogin placeholder={"Accede"} submit={true}/></Link>
                        <IbuttonLogin placeholder={"Olvidaste la contraseña?"}/>
                        <IbuttonLogin placeholder={"Solicita tu registro"}/>
                    </div>
                </form>
            </div>
        </div>
    );
  }
  
  export default Login;