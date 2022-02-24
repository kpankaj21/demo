import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios(
      `https://gateway.marvel.com/v1/public/characters?&ts=1639565090520&apikey=2e607457520c8e2f33d5fcc111a7c5bd&hash=e9c1a52bbeabe52ed4f5c0b402f02f15&limit=20&offset=0&id=${id}`
    );
    console.log(result.data.data.results[0].description);
    setname(result.data.data.results[0].name);
    setdescription(result.data.data.results[0].description);
  };
  //   console.log("user",description);
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />

      <div className="col-sm-4 my-2">
        <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
          <div className="card-body">
            <div>
              <h1>Name: {name}</h1>
              {
                <div>
                  {!description ? (
                    <h1>Description:No Description</h1>
                  ) : (
                    <h5>Description:{description}</h5>
                  )}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
