import React from 'react';

const CreatePost = () => {
   return (
      <div className="card input-field" style={{
         margin: "30px auto", maxWidth: "850px", padding: "40px", textAlign: "center"
      }}>
         <input type="text" className="input" name="title" placeholder="Title" />
         <input type="text" className="input" name="body" placeholder="Body" />
         <div className="file-field input-field">
            <div className="btn-small amber darken-1">
               <span>Upload Image</span>
               <input className="input" type="file" />
            </div>
            <div className="file-path-wrapper">
               <input className="file-path validate input" type="text" />
            </div>
         </div>
         <button className="btn amber darken-3 waves-effect waves-light auth-card-submit-button" type="submit">Submit Post</button>
      </div>
   );
}

export default CreatePost;