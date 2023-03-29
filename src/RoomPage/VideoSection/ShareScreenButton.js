import React, { useState } from "react";
import SwitchImg from '../../resources/images/switchToScreenSharing.svg'



const ShareScreenButton = () => {
  
  const [isScreenSharingActive,setIsScreenSharing] = useState(false)

  const handleScreenShareToggle = () => {
    setIsScreenSharing = (!isScreenSharingActive)
  }


  return <div className="video_button_container"> <img src={SwitchImg} onClick={handleScreenShareToggle} className="video_button_image"  /></div>
  
};

export default ShareScreenButton;
