import React,{useEffect} from "react";
import ChatSection from "./ChatSection/ChatSection";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import {connect} from "react-redux";
import RoomLabel from "./RoomLabel";
import * as webRTCHandler from '../utils/webRTCHandler' //tenho acesso à todas funçõeos exportadas lá, importando assim
import Overlay from "./Overlay";

import './RoomPage.css';




//irei executar essa função apenas uma vez, portanto passo o array no final, vazio. se não passar ele vazio, irá executar a cada remount de componente

const RoomPage = ({roomId,identity,isRoomHost,showOverlay}) => { //pego por props do redux

  useEffect(() => {

    webRTCHandler.getLocalPreviewAndInitRoomConection(isRoomHost,identity,roomId,); //pego do store do redux o showoverlay que é um boleano e mostro ele ali embaixo somento se for true... lá na lógica do webrtchandler, consigo mudar o estado dele q por padrão é true, quando houver a conexão vou trocar pra false pra q ele pare de ser mostrado.

  },[]); 

  return <div className="room_container">
    <ParticipantsSection/>
    <VideoSection/>
    <ChatSection/>
    <RoomLabel roomId='123testeid'/>
    { showOverlay && <Overlay/>} 
  </div>
};


const mapStoreStateToProps = (state) => {
return {
  ...state,
}
}

export default connect(mapStoreStateToProps)(RoomPage);
