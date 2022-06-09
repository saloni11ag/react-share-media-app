import React from "react";

import MailIcon from "../images/icons8-mail.svg";

import './ReactShareWidget.css'

function MailShareLink({url, incrementCount}) {

  return (
    <a href={`mailto:?subject=Sharing the react website!&body=` + url} onClick={incrementCount}>
      <img className="media-icon" src={MailIcon} alt="mail" />
    </a>
  );
}

export default MailShareLink;
