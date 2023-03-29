import React from "react";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import MicButton from "./MicButton";
import ShareScreenButton from "./ShareScreenButton";




const VideoButtons = (props) => {
  return (
    <div className="video_buttons_container" >
        <MicButton/>
        <CameraButton/>
        <LeaveRoomButton/>
        <ShareScreenButton/>
      
      </div>
  )
};

export default VideoButtons;
