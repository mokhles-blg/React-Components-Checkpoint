import React from "react";
import "./Card.css";
import ProfilPhoto from "../ProfilPhoto";
import FullName from "../FullName";
import Address from "../Address";

const Card = () => {
  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <ProfilPhoto />
        </div>
      </div>
      <div className="lower-container">
        <div className="fullname">
          <FullName />
        </div>
        <div className="address">
          <Address />
        </div>
      </div>
    </div>
  );
};

export default Card;
