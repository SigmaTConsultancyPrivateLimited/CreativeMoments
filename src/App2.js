// import logo from './logo.svg';
import './App2.css';
import profile from "./images/profile.png"
import email from "./images/email.jpg"
import pass from "./images/pass.png"


function App2() {
  return (


    <div className="main">
      <div className="sub-main">
        <div>
            <div className='imgs'>
              <div className='container-image'>
                <img src={profile} alt="profile" className="profile" />
              </div>
          
            </div>
            <div>
              <h1>Login Page</h1>
             
              <div>
                <img src={email} alt='email' className='email' />
                <input type='text' placeholder='User Name' className='name'/>
              </div>
             
              <div className='second-input'> 
                <img src={pass} alt='pass' className='pass' />
                <input type='password' placeholder='User Name' className='name'/>
              </div>
             
              <div className='login-button'>
                <button>Login</button>
              </div>

              <div>
                <p className='link'>
                  <a href='#' >Forgot Password ?</a> or <a href="#">Sign Up</a>
                </p>
              </div>

            </div>

      </div>
    </div>
    </div>


  );
}

export default App2;
