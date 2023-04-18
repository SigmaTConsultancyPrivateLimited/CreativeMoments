// import logo from './logo.svg';
import '.src/Pages/Singuppage/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/logo.png"
import insta from "./images/insta.png"
import twitter from "./images/twitter-Icon.png"
import fb from "./images/fIcon.png"


function signup() {
  return (

    <div className="main">

      <div className='header'>
        <button className='btn-login-header'>Signup</button>
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className='header-text'>
            <p className='text'>Signup to Your Account</p>
        </div>
      </div>

    <div className='container'>

        <div className='left-container'>
        <p className='left-container-text1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

        <p className='left-container-text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>

    <div className='right-container-signup'>
    <div className="sub-main">
        <div>
            <div>
            
            <div className='first-input'>
                <label className='signup-label'>First Name</label>
                <input type='text' placeholder='First Name' className='signup-input'/>
            </div>
            <div className='first-input'>
                <label className='signup-label'>Last Name</label>
                <input type='text' placeholder='Last Name' className='signup-input'/>
            </div>
            <div className='first-input'>
                <label className='signup-label'>Personummer</label>
                <input type='text' placeholder='Personummer' className='signup-input'/>
            </div>
            <div className='first-input'>
                <label className='signup-label'>Telefonummer</label>
                <input type='text' placeholder='Telefonummer' className='signup-input'/>
            </div>
            <div className='first-input'>
                <label className='signup-label'>E-Post</label>
                <input type='text' placeholder='E-Post' className='signup-input'/>
            </div>

            <div className='second-input'>
                <label className='login-radio-label'> <input className='login-radio-btn' type="radio" name="options" value="option1"/> Remember me</label>
                <button className='btns btn-signup'>Signup</button>
                <button className='btns btn-login'>Login</button>
            </div>
            


            </div>

        </div>
    </div>

        
     </div>
     </div>
     <div className='footer'>
        <div className="box1">
          <img src={logo} alt="logo" className="logo-footer" />
            <ul className='footer-first-section'>
            <li><a href="#" className="index-anch links">Cookies</a></li>
            <li><a href="#" className="index-anch links"> Terms and Conditions</a></li>
            </ul>
        </div>

        <div className="box2">
          <ul className='footer-second-section'>
          <h3>About</h3>
          <li><a href="#" className="index-anch links"> <i className="fas fa-phone"></i>About Us</a></li>
          <li><a href="#" className="index-anch links"> <i className="fas fa-phone"></i> Shops </a></li>
          <li><a href="#" className="index-anch links"> <i className="fas fa-envelope"></i> Kontakta oss </a></li>
          </ul>
        </div>

        <div className="box3">
        <ul className='footer-third-section'>
            <h3>Questions?</h3>
            <li><a href="#" className="index-anch links"> <i className="fas fa-phone"></i>Frequently Asked Questions</a></li>
            <li><a href="#" className="index-anch links"> <i className="fas fa-phone"></i>Contact Us</a></li>
          </ul>  
        </div>
        <hr />

        <p className='footer1-first-section'>© 2023  Our Creative Moments</p>

        <div className='footer1-second-section'>
          <a className='footer1-second-section-a'>Privacy&nbsp; &nbsp; &nbsp;</a>   <a className='footer1-second-section-a'>Accessibility&nbsp; &nbsp; &nbsp;</a>  <a className='footer1-second-section-a'>Terms &nbsp; &nbsp; &nbsp;</a>  
        </div>

       <div className='footer1-logo-section'>
          <a className='background insta-back'><img src={insta} className="insta"/></a>
          <a className='background twiiter-back'><img src={twitter} className="twitter"/></a>
          <a className='background fb-back'><img src={fb} className="fb"/></a>
       </div> 

      </div>
   

     
    </div> 


  );
}

export default signup;
