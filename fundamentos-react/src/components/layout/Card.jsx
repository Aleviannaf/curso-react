import React from "react";
import "./Card.css";

export default (props) =>{
  const cardStyle = {
    backgroundColor: props.color ||  '#ff0000', 
    borderColor: props.color ||  '#ff0000',
  };
  return(
    <div className="Card" style={cardStyle}>
        <div className="Title">{props.title}</div>
        <div className="Content">{props.children}</div>
    </div>
  );
}