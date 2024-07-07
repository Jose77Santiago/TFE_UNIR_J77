import '../../assets/css/ibuttonLogin.css'

function IbuttonLogin({placeholder, submit, grande}) {
    if(submit===true){
        return (
            <div className='main_ibutton_login'>
                <input className='button_ibutton_login' type='submit' value={placeholder}/>
            </div>
            ) 
        }
    if(grande===true){
        return (
            <div className='main_ibutton_login'>
                <input className='button_ibutton_login button_ibutton_login_grande' type='submit' value={placeholder}/>
            </div>
            ) 
        }
    else{
        return (
            <div className='main_ibutton_login'>
                <input className='button_ibutton_login' type='button' value={placeholder}/>
            </div>
        )
    }
  }
  
  export default IbuttonLogin;