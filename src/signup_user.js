import './signup_user.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/logo.png"
import user from "./images/user_icon.png"

function signup_user() {
  return (
<div>
      <div className='header_top'>
        <a className='header_top_action1'>Supplier<hr/></a>
        <a className='header_top_action2'>user</a>
        <img className='supplier_prof' ></img>
      </div>
      <div className='main'>
      <div className='header'>
        <img src={logo} alt="logo" className="logo" />
        <input className='login-radio-btn1' type="radio" name="options" value="option1"/>
        <label className='login-radio-label1'> Personal Information</label>
        <input className='login-radio-btn2' type="radio" name="options" value="option1"/>
        <label className='login-radio-label2'>Business Details</label>
      </div>
        <div className='container-signup'>
          <form>
            <div className="sub-main">
                <p className='supplier-top-text1'>GET STARTED</p>
                <p className='supplier-top-text2'>Personal Information</p>
                <div className='first-input'>
                    <input type='text' placeholder='First Name' className='signup-input text'/>
                    <input type='text' placeholder='Last Name' className='signup-input text'/>
                    <input type='text' placeholder='Telefonnummer' className='signup-input tele'/>
                    <input type='text' placeholder='E-Post' className='signup-input email'/>
                </div>

               
                <div className='second-input'>
                    <button className='btns btn-signup'>Signup</button>
                    <p className='supplier-signup-text1'>By clicking "Get Started - Free!" I agree to Creative Terms of Service</p>
                    <a className='supplier-signup-text2'>Already have an Business account? Log in</a>
                </div>
            </div>
            </form>
        </div>

      </div>
     </div>
  );
}
export default signup_user;