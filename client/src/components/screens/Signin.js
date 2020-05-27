import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

const Signin = () => {
   const history = useHistory();

   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");

   const postData = () => {

      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
         fetch(
            "http://localhost:5000/signin",
            {
               method: "post",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  password,
                  email,
               })
            }).then(res => res.json()).then(data => {
               console.log(data);
               if (data.error) {
                  M.toast({ html: data.error, classes: " red darken-4" });
               } else {
                  localStorage.setItem("jwt", data.token);
                  localStorage.setItem("user", JSON.stringify(data.user));

                  M.toast({ html: "Signed in Success", classes: " green darken-3" });
                  history.push('/');
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
            <h2 className="header">Signin</h2>
            <div className="card-content input-field">

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
                  type="submit">
                  Signin
               </button>

               <p
                  className="auth-navigate-link">
                  <Link to="/signup">
                     Don't have an account? Signup
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
}

export default Signin;