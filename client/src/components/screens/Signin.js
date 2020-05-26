import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
   return (
      <div className="auth">
         <div className="card auth-card">
            <h2 className="header">Signin</h2>
            <div className="card-content input-field">
               <input type="email" className="input" name="email" placeholder="Email" />
               <input type="password" className="input" name="password" placeholder="Password" />
               <button className="btn amber darken-3 waves-effect waves-light auth-card-submit-button" type="submit">Signin</button>
               <p className="auth-navigate-link"><Link to="/signup">Don't have an account? Signup</Link></p>
            </div>
         </div>
      </div>
   );
}

export default Signin;