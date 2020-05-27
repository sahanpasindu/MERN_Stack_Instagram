import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

const Signup = () => {
   const history = useHistory();
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");

   const postData = () => {
      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
         fetch(
            "http://localhost:5000/signup",
            {
               method: "post",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  name,
                  password,
                  email,
               })
            }).then(res => res.json()).then(data => {
               if (data.error) {
                  M.toast({ html: data.error, classes: " red darken-4" });
               } else {
                  M.toast({ html: data.message, classes: " green darken-3" });
                  history.push('/signin');
               }
            }).catch(err => {
               console.log(err);
            });
      } else {
         M.toast({ html: 'Invalid Email address', classes: " red darken-4" });
      }
   }

   return (
      <div className="auth">
         <div className="card auth-card">
            <h2 className="header">Signup</h2>
            <div className="card-content input-field">

               <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                  name="name"
                  placeholder="Name" />

               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  name="email"
                  placeholder="Email" />

               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  name="password"
                  placeholder="Password" />

               <button
                  className="btn amber darken-3 waves-effect waves-light auth-card-submit-button"
                  onClick={() => postData()}
               >
                  Signup</button>

               <p className="auth-navigate-link"><Link to="/signin">Already have an account? Signin</Link></p>
            </div>
         </div>
      </div>
   );
}

export default Signup;