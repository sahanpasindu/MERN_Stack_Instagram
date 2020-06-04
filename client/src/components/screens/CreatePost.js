import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css';

const CreatePost = () => {
   const history = useHistory();

   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [image, setImage] = useState("");
   const [url, setUrl] = useState("");

   const postDetails = () => {
      const data = new FormData();
      data.append('file', image);
      data.append("upload_preset", "insta-clone");
      data.append('cloud_name', "sahan");
      fetch("https://api.cloudinary.com/v1_1/sahan/image/upload",
         {
            method: 'post',
            body: data,
         })
         .then(res => res.json())
         .then(data => { setUrl(data.url) })
         .catch(err => console.log(err));

   }

   // use effect kicking after url update (goal => after image upload, post upload to server)
   useEffect(() => {
      // useEffect also kicking compnonent intialize (1st time render), so we have to prevent post creation untill we have an image url, we can prevent that using a logic
      if (url) {
         fetch(
            "http://localhost:5000/createpost",
            {
               method: "post",
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + localStorage.getItem("jwt"),
               },
               body: JSON.stringify({
                  title,
                  body,
                  pic: url,
               })
            }).then(res => res.json()).then(data => {
               console.log(data);
               if (data.error) {
                  M.toast({ html: data.error, classes: " red darken-4" });
               } else {
                  M.toast({ html: "Post created successfuly", classes: " green darken-3" });
                  history.push('/');
               }
            }).catch(err => {
               console.log(err);
            });
      }
   }, [url]) // according to url change this useEffect will run, useEffect always called after state change, so we have to limit post create after url is available, meaning the image has been uploaded. and then we are put our new post in the database

   return (
      <div className="card input-field" style={{
         margin: "30px auto", maxWidth: "850px", padding: "40px", textAlign: "center"
      }}>
         <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
            name="title"
            placeholder="Title" />

         <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="input"
            name="body"
            placeholder="Body" />

         <div className="file-field input-field">
            <div className="btn-small amber darken-1">
               <span>Upload Image</span>
               <input
                  className="input"
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file" />
            </div>

            <div className="file-path-wrapper">
               <input className="file-path validate input" type="text" />
            </div>
         </div>

         <button
            onClick={() => postDetails()}
            className="btn amber darken-3 waves-effect waves-light auth-card-submit-button"
            type="submit">
            Submit Post
         </button>

      </div>
   );
}

export default CreatePost;