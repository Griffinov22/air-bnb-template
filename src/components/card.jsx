import React from "react";
import "../css/index.css";
import star from "../images/star.png";
import katie from "../images/katie-zaferes.png";
import mountainBike from "../images/mountain-bike.png";
import weddingPic from "../images/wedding-photography.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) badgeText = "SOLD OUT";
  else if (props.location === "Online") badgeText = "ONLINE";

  return (
    <figure className="card-container">
      <div className="photo-container">
        <img src={`./${props.coverImg}`} alt="picture" />

        {badgeText && (
          <p
            style={{
              background: badgeText === "ONLINE" ? "#F8EE7A" : "white",
              fontWeight: "600",
            }}
          >
            {badgeText}
          </p>
        )}
      </div>
      <figcaption>
        <p className="ratings">
          <img className="star" src={star} alt="" />
          {props.stats.rating}
          <span>
            &nbsp;({props.stats.reviewCount}) • {props.location}
          </span>
        </p>
        <p className="job-caption">{props.title}</p>
        <p className="price">
          <span>From ${props.price} /</span> person
        </p>
      </figcaption>
    </figure>
  );
}
export default Card;
