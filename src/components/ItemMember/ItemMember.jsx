// Module Dependecies
import React from "react";

// Module main Component
const ItemMember = props => {
  return (
    <div className="dv-item">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default ItemMember;
