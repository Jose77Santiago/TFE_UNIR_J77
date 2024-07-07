import '../../assets/css/itextLogin.css'

function ItextLogin({imagen, placeholder, password}) {
    if(password===true){
    return (
        <div className='main_itextlogin'>
            <img className='img_itext_login' src={imagen} alt="login"></img>
            <input className='itext_itext_login' type='password' placeholder={placeholder}></input>
        </div>
    );}
    else{
        return (
            <div className='main_itextlogin'>
                <img className='img_itext_login' src={imagen} alt="login"></img>
                <input className='itext_itext_login' type='text' placeholder={placeholder}></input>
            </div>
        );}
  }
  
  export default ItextLogin;