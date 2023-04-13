import './signup_supplier.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/logo.png"
import user from "./images/user_icon.png"


function signup_supplier() {
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
                <p className='user-top-text1'>GET STARTED</p>
                <p className='user-top-text2'>Business Login</p>
                <div className='first-input'>
                    <input type='text' placeholder='  Paintball' className='signup-input text1'/>
                    <input type='text' placeholder='  Org number' className='signup-input text2'/>
                    <input type='text' placeholder='  Adress line 1' className='signup-input address'/>
                    <input type='text' placeholder='  Postnummer' className='signup-input post'/>
                    <input type='text' placeholder='  City' className='signup-input city'/>
                    <input type='text' placeholder='  Choose category' className='signup-input category'/>
                 

                </div>

               
                <div className='second-input'>
                    <button className='btns btn-signup'>Submit</button>
                    <p className='supplier-signup-text1'>By clicking "Get Started - Free!" I agree to Creative Terms of Service</p>
                    <p className='supplier-signup-text2'>Already have an Business account? <a className='supplier-signup-text2-a'>Log in</a></p>
                </div>
            </div>
            </form>
        </div>

      </div>
     </div>
  );
}
export default signup_supplier;