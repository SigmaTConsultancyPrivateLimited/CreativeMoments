import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
     
      <ul>
        
        <li>
          <Link to="/signinpage">signinpage</Link>
        </li>
        <li>
          <Link to="/signup_supplier">SignUp Supplier</Link>
        </li>
        <li>
          <Link to="/signup_user">Signup User</Link>
        </li>
        <li>
          <Link to="/signuppage">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
