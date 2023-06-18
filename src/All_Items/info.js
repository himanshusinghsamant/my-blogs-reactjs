import React from "react";
import {Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import './infoStyle.css'


const Info = () => {
  const location = useLocation();
  const data = location.state
  console.log(data);

  return (
    <div style={{ backgroundColor: "rgb(184, 182, 182)", height: "auto" }}>
      <Navbar />
      <div className="container mt-5 pt-5" style={{ height: "400px"}}>
        <div className="card mb-3" style={{maxWidth:"540px;"}}>
          <div className="row-style row g-0">
            <div className="col-md-4 d-flex align-items-center " style={{height:'auto',width:'370px'}}>
              <img style={{margin:'10px',borderRadius:'10px'}} src={data.param2} class="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title" style={{fontWeight:'bold'}}>{data.param1}</h3>
                <h5 className="card-title" style={{fontWeight:'600'}}>{data.param3}</h5>
                <p className="card-text">
                <Link to={data.param5}>Visit this link for more information</Link>
                </p>
                <p className="card-text">
                 {data.param4}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {data.param6}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Info;
