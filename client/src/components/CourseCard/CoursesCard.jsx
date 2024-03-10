import React from "react";
import "./CoursesCard.css";

function CoursesCard({name, seats, startdate}) {
  // Return function with HTML code
  return (
    <div className="superproject-card">
      <div className="project-card-top">
        <h2>{name}</h2>
      </div>
      <div className="project-card-mid">
        <img src={seats} alt=""/>
      </div>
      <div className="project-card-bottom">
        <p>{startdate}</p>
      </div>
    </div>
  );
}

export default CoursesCard;
