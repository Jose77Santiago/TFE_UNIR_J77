import '../../assets/css/Reloj.css'
import reloj from '../../assets/images/reloj.png'

function Reloj() {
    return (
        <div className='main_fecha_hora'>
            <img className='img_reloj' src={reloj} alt="Reloj"></img>
            <div className='bloque_text_reloj'>
                <div className='text_fecha'>Día 22 de Julio de 2024</div>
                <div className='text_hora'>11:34 AM</div>
            </div>
        </div>
    );
  }
  export default Reloj;