import '../../assets/css/Menu.css'
import rayas from '../../assets/images/rayas_menu.png'

function Menu() {
    return (
        <div className='main_menu_desplegable'>
            <img className='img_menu_desplegable' src={rayas} alt="Menú"></img>
            <div className='text_menu_desplegable'>Menú</div>
        </div>
    );
  }
  export default Menu;