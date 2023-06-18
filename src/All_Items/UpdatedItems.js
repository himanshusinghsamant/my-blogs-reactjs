import React from "react";
import { useNavigate } from "react-router-dom";
import './Mystyle.css'



const UpdatedItems = (props) => {
  const name = props.data.source.name
  const title = props.data.title;
  const desc = props.data.description;
  const linkUrl = props.data.url;
  const  image = props.data.urlToImage;
  const publishAt = props.data.publishedAt;
  const datas = {
    param1: name,
    param2: image,
    param3: title,
    param4: desc,
    param5: linkUrl,
    param6: publishAt
  };
  const navigate = useNavigate();
  function goToSummary() {
    navigate("/info", { state: datas });
  }

  return (
    <div>
      <div className="card-style card" style={{ width: "18rem" }}>
        <img src={props.data.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.data.source.name}</h5>
          <p className="card-text">{props.data.title}</p>
          <a onClick={goToSummary} className="my-style btn btn-primary">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpdatedItems;
