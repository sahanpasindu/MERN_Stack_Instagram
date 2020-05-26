import React from 'react';

const Home = () => {
   return (
      <div className="home">
         <div className="card home-card">
            <h5>Sahan</h5>
            <div className="card-image">
               <img src="https://images.unsplash.com/photo-1590076564717-c413c40fa709?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
            </div>
            <div className="card-content">
               <h6>Title goes here</h6>
               <p>Description goes here</p>
               <input type="text" name="" id="" placeholder="Comment here" />
            </div>
         </div>
      </div>
   );
}

export default Home;