import React from 'react';

const Profile = () => {
   return (
      <div style={{ maxWidth: "850px", margin: "0px auto" }}>
         <div style={{ display: "flex", justifyContent: "space-around", margin: "18px 0px", borderBottom: "1px solid #eeeeee", borderBottomWidth: "thin" }}>
            <div>
               <img src="https://images.unsplash.com/flagged/photo-1557786458-77474e6ff1bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="" style={{ width: "160px", height: "160px", borderRadius: "80px" }} />
            </div>
            <div>
               <h4>Sarah Twifn</h4>
               <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                  <h6>40 posts</h6>
                  <h6>40 followers</h6>
                  <h6>80 following</h6>
               </div>
            </div>
         </div>
         <div className="gallery">
            <img className="gallery-item" src="https://images.unsplash.com/photo-1590374584403-6e9673571c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt="" />
            <img className="gallery-item" src="https://images.unsplash.com/photo-1590374584403-6e9673571c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt="" />
            <img className="gallery-item" src="https://images.unsplash.com/photo-1590374584403-6e9673571c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt="" />
            <img className="gallery-item" src="https://images.unsplash.com/photo-1590374584403-6e9673571c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt="" />
         </div>
      </div>
   );
}

export default Profile;