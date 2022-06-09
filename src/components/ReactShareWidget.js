import React, { useState } from "react";
import ShareIcon from "../images/icons8-share.svg";
import CloseIcon from "../images/icons8-close.svg";

import "./ReactShareWidget.css";
import MailShareLink from "./MailShareLink";
import FacebookShareIcon from "./FacebookShareIcon";
import WhatsappShareIcon from "./WhatsappShareIcon";
import LinkedinShareLink from "./LinkedinShareLink";

function ReactShareWidget() {
  const [expand, setExpand] = useState(false);
  const [count, setCount] = useState(0);

  //   const url = window.location.href;
  const url = "https://reactjs.org/";

  const incrementCount = () => {
    setCount(prevCount => prevCount+1)
  }

  return (
    <>
    <div className="share-box">
      <WhatsappShareIcon url={url} incrementCount={incrementCount} />
      {expand && (
        <>
          <FacebookShareIcon url={url} incrementCount={incrementCount} />
          <LinkedinShareLink url={url} incrementCount={incrementCount} />
          <MailShareLink url={url} incrementCount={incrementCount} />
        </>
      )}
      <img
        className="share-icon"
        src={!expand ? ShareIcon : CloseIcon}
        alt="share"
        onClick={() => setExpand(!expand)}
      />
    </div>
    <p>No. of Shares: {count}</p>
    </>
  );
}

export default ReactShareWidget;
