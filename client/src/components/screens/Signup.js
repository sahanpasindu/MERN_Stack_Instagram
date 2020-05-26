import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
   return (
      <div className="auth">
         <div className="card auth-card">
            <h2 className="header">Signup</h2>
            <div className="card-content input-field">
               <input type="text" className="input" name="name" placeholder="Name" />
               <input type="email" className="input" name="email" placeholder="Email" />
               <input type="password" className="input" name="password" placeholder="Password" />
               <button className="btn amber darken-3 waves-effect waves-light auth-card-submit-button" type="submit">Signup</button>
               <p className="auth-navigate-link"><Link to="/signin">Already have an account? Signin</Link></p>
            </div>
         </div>
      </div>
   );
}

export default Signup;