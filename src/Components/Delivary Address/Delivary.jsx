import React from "react";

const Delivary = ({delivaryInfo}) => {
  return (
    <div>
      <div className=" details_container customer_details">
        <h6 className="fw-bold" style={{ color: "#dc3545" }}>
          To,
        </h6>
        <p>
          <strong className="font-weight-bold name">
            {delivaryInfo.name}
          </strong>
        </p>
        <p>
          {delivaryInfo.address}
        </p>
      </div>
    </div>
  );
};

export default Delivary;
