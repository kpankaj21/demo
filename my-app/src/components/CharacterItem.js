import React from "react";
import { Link } from "react-router-dom";

const CharacterItem = ({ item }) => {
  return (
    <div className="col-sm-4 my-2">
      <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
        <div className="card-body text-center">
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt="" />
          <h1 className="card-text">{item.name}</h1>
          <Link class="btn btn-primary mr-2" to={`/view/${item.id}`}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CharacterItem;
