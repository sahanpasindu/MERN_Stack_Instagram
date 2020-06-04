import React, { useContext, useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allposts", {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    }).then((res) =>
      res.json().then((result) => {
        console.log(result.posts);
        setData(result.posts);
      })
    );
  }, []);

  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div className="card home-card" key={item._id}>
            <h5>{item.postedBy.name}</h5>
            <div className="card-image">
              <img src={item.photo} alt="" />
              <a className="btn-floating halfway-fab waves-effect waves-light pink accent-3">
                <i className="material-icons">favorite_border</i>
              </a>
            </div>
            <div className="card-content input-field">
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              <input
                type="text"
                name="comment"
                placeholder="Add your comments"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
