// import logo from './logo.svg';
import '.src/Pages/signinpage/login.css';
import logo2 from "./images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';

function login() {
  return (


    <div className="main">

      <div className='header'>
        <button className='btn-signup'>Signup</button>
        <div>
          <img src={logo2} alt="logo" className="logo" />
        </div>

        <div className='header-text'>
            <p className='text'>Login to Your Account</p>
        </div>
      </div>

      <div className='container'>

        <div className='left-container'>
          <p className='left-container-text1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

          <p className='left-container-text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>


      
        <div className='right-container'>
          <div className="sub-main">
            <div>
                <div>
                 
                  <div className='first-input'>
                    <label className='email-label'>Email Address</label>
                    <input type='text' placeholder='Email Id' className='email-input'/>
                  </div>
                
                  <div className='second-input'> 
                  <label className='pass-label'>Password</label>
                    <input type='password' placeholder='**********' className='pass-input'/>
                  </div>

                  <div className='third-input'>
                    <label className='login-radio-label'> <input className='login-radio-btn' type="radio" name="options" value="option1"/> Remember me</label>
                    <button className='btn-login'>Login</button>
                    <a className='create-account-btn'>Create Account</a>
                    <a className='forgot-password'>Forgot Password?</a>
                  </div>
                


                </div>

            </div>
          </div>
    

        </div>
      </div>

      <div className='footer'>
        <div className="box1">
          <img src={logo2} alt="logo" className="logo-footer" />
            <ul className='footer-first-section'>
            <li><a href="#" className="index-anch links">Cookies</a></li>
            <li><a href="#" className="index-anch links"> Terms and Conditions</a></li>
            </ul>
        </div>

        <div className="box2">
          <ul className='footer-second-section'>
          <h3>About</h3>
          <li><a href="#" className="index-anch links"> <i class="fas fa-phone"></i>About Us</a></li>
          <li><a href="#" className="index-anch links"> <i class="fas fa-phone"></i> Shops </a></li>
          <li><a href="#" className="index-anch links"> <i class="fas fa-envelope"></i> Kontakta oss </a></li>
          </ul>
        </div>

        <div className="box3">
        <ul className='footer-third-section'>
            <h3>Questions?</h3>
            <li><a href="#" className="index-anch links"> <i class="fas fa-phone"></i>Frequently Asked Questions</a></li>
            <li><a href="#" className="index-anch links"> <i class="fas fa-phone"></i>Contact Us</a></li>
          </ul>  
        </div>
        <hr />

        <p className='footer1-first-section'>© 2023  Our Creative Moments</p>

        <div className='footer1-second-section'>
          <a className='footer1-second-section-a'>Privacy&nbsp; &nbsp; &nbsp;</a>   <a className='footer1-second-section-a'>Accessibility&nbsp; &nbsp; &nbsp;</a>  <a className='footer1-second-section-a'>Terms &nbsp; &nbsp; &nbsp;</a>  
        </div>

        <p></p>

      </div>
   

     
    </div> 


  );
}

export default login;
