import React from 'react';
import LinkedInIcon from "../images/icons8-linkedin.svg";

import "./ReactShareWidget.css";

function LinkedinShareLink({url, incrementCount}) {

    const linkedinShare = () => {
        incrementCount();
        window.open(`https://linkedin.com/shareArticle?mini=true&url=${url}`, "", "height=400,width=500");
    }

    return(
    <img className='media-icon' src={LinkedInIcon} alt="linkedin" onClick={linkedinShare}/>
    )
}

export default LinkedinShareLink;