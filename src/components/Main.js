import React from "react";
// import Image from "../images/img.jpg";
import Image from "../images/gif-3.gif";
import "./MainStyle.css";
const main = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="main-bg-style">
      <div className="box1">
        <h1 id="text">
          Publish your passions,
          <br /> your way
        </h1>
        <p id="para-txt">Create a unique and beautiful blog easily.</p>
      </div>
      <div className="cont-bg-style container-fluid">
        <div className="cont1-bg-style container-fluid">
          <div className="cont2-bg-style container-fluid"></div>
        </div>
      </div>
      <div className="img-box container d-flex justify-content-center mt-5">
        <img
          className="img"
          style={{ height: "50vh", width: "auto", borderRadius: "50%" }}
          src={Image}
          alt="not found"
        />
      </div>
      <div className="box2"></div>
      <div className="box3"></div>
      <div className="box4"></div>
      <div className="box5"></div>
    </div>
  );
};

export default main;
