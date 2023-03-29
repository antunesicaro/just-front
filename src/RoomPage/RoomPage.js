import React from "react";
import ChatSection from "./ChatSection/ChatSection";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import {connect} from "react-redux";

import './RoomPage.css';
import RoomLabel from "./RoomLabel";



const RoomPage = ({roomId}) => {
  return <div className="room_container">
    <ParticipantsSection/>
    <VideoSection/>
    <ChatSection/>
    <RoomLabel roomId='123testeid'/>
  </div>
};


const mapStoreStateToProps = (state) => {
return {
  ...state,
}
  

}

export default connect(mapStoreStateToProps) (RoomPage);
