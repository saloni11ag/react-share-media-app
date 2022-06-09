import React from "react";
import WhatsAppIcon from "../images/icons8-whatsapp.svg";
import "./ReactShareWidget.css";

function WhatsappShareIcon({ url, incrementCount }) {
  const waShare = () => {
    incrementCount()
    window.open(`https://web.whatsapp.com/send?text=${url}`, "", "height=400,width=500");
  };

  return <img className="media-icon" src={WhatsAppIcon} alt="whatsapp" onClick={waShare} />;
}

export default WhatsappShareIcon;
