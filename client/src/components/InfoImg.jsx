import React from "react";

function InfoImg(props) {
  return (
    <div className="info-img" id={props.id}>
      <img src={props.src} alt={props.alt} />
      <div>
        <p>{props.text}</p>
        <br />
        <p>{props.textTwo}</p>
      </div>
    </div>
  );
}

export default InfoImg;
