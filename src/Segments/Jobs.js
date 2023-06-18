import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import JobItems from "../All_Items/JobItems";
import '../All_Items/Mystyle.css'

// const baseURL =  "https://newsapi.org/v2/top-headlines?country=us&apiKey=704300288c7d45afb8966dfbff493607&q=up";
const baseURL =  "https://newsapi.org/v2/top-headlines?country=us&apiKey=704300288c7d45afb8966dfbff493607&q=up";

const Jobs = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) {
    return null;
  }

  return (
    <div style={{backgroundColor:'rgb(184, 182, 182)'}}>
      <Navbar/>
      <div className="job-sec-bg mt-5 container">
        <div className="row mt-5 ms-4">
          <h2 style={{padding:' 40px 20px 0px 0px',fontWeight:'800',color:'white'}} >LATEST JOBS INFORMATION</h2>
          {post.articles.map((items) => {
            return (
              <div className="col-md-6 my-4 ps-4 col-lg-4">
                <JobItems data={items}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Jobs;

