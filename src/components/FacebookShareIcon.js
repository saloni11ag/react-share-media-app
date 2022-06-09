import React from "react";

import FacebookIcon from "../images/icons8-facebook.svg";

import "./ReactShareWidget.css";

function FacebookShareIcon({ url, incrementCount }) {
  const fbShare = () => {
    incrementCount();
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "",
      "height=400,width=500"
    );
  };

  return (
    <img
      className="media-icon"
      src={FacebookIcon}
      alt="facebook"
      onClick={fbShare}
    />
  );
}

export default FacebookShareIcon;
