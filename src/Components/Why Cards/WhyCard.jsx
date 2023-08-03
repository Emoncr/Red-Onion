import React from "react";
import "./card.css";
const WhyCard = ({ data }) => {
  const { cardTitle, cardImage, cardIcon, cardDesc, cardId } = data;

  return (
    <div className="card why_card">
      <img className="img-fluid w-100" src={cardImage} alt="" />
      <div className="service_container mt-3 d-flex">
        <div className="image_container ">
          <img  src={cardIcon} alt="" />
        </div>
        <div className="card-body why_card_body">
          <h5 className="card-title fs-4 fw-bold ">{cardTitle}</h5>
          <p className="card-text "> {cardDesc}</p>
        </div>
        
      </div>
    </div>
  );
};

export default WhyCard;
