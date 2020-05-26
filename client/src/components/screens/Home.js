import React from 'react';

const Home = () => {
   return (
      <div className="home">
         <div className="card home-card">
            <h5>Sahan</h5>
            <div className="card-image">
               <img src="https://images.unsplash.com/photo-1590374584403-6e9673571c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80" alt="" />
               <a className="btn-floating halfway-fab waves-effect waves-light pink accent-3"><i className="material-icons">favorite_border</i></a>
            </div>
            <div className="card-content input-field">
               <h6>Title goes here</h6>
               <p>Description goes here</p>
               <input type="text" name="comment" placeholder="Add your comments" />
            </div>
         </div>
         <div className="card home-card">
            <h5>Sahan</h5>
            <div className="card-image">
               <img src="https://images.unsplash.com/photo-1590374584403-6e9673571c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80" alt="" />
               <a className="btn-floating halfway-fab waves-effect waves-light pink accent-3"><i className="material-icons">favorite_border</i></a>
            </div>
            <div className="card-content input-field">
               <h6>Title goes here</h6>
               <p>Description goes here</p>
               <input type="text" name="comment" placeholder="Add your comments" />
            </div>
         </div>
      </div>
   );
}

export default Home;