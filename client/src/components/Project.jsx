import React from "react";

function Project(props) {
  console.log(typeof(props.location))
  return (
    <div className="project">
      <img src={props.src} alt={props.alt} />
      <h3>{props.title}</h3>
      <p><a href={props.location}>{props.linkText}</a></p>
      {props.demoLocation ? <p><a href={props.demoLocation}>Demo</a></p> : null}
      <br/>
      <p>
        {props.text}
      </p>
      {/* <a href={`${props.location}`}>Source Code</a> */}
      

    </div>
  );
}

export default Project;