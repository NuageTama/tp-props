import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import users from "./Users.json";

function User(props) {
  return (
    <div className="card">
      <div className="card-content">
        <img
          src={props.picture.medium}
          alt={`Profile of ${props.name.first}`}
          style={{ width: "100%" }}
        />
        <div className="container">
          <h4>{props.name.first}</h4>
          <p>
            {props.location.state}, {props.location.country}
          </p>
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  gender: PropTypes.string,
  name: PropTypes.shape({
    title: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string
  }).required,
  location: PropTypes.object,
  email: PropTypes.string,
  picture: PropTypes.shape({
    medium: PropTypes.string
  })
};

export default function App() {
  // console.log(users.results);
  return (
    <div className="App">
      <h1>React network</h1>
      <h2>Le réseau social des pro de React!</h2>
      <main className="main-area">
        <div className="cards">
          {users.results.map((user, index) => {
            return <User {...user} key={index} />;
          })}
        </div>
      </main>
    </div>
  );
}
