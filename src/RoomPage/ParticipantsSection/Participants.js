import React from "react";

const dummyParticipants = [
    {
        identity:'Icaro'
    },
    {
        identity:'Tokyo'
    },
    
    
];


const SingleParticipant = (props) => {
   const {identity,lastItem,participant} = props;
   
   return <>
<p className="participants_paragraph">{identity}</p>
{!lastItem && <span className="participants_separator_line"></span>}
   </>
}

const Participants = () => {
  return <div className="participants_container" >
        {dummyParticipants.map((participant,index) => {
            return (
                <SingleParticipant 
                key={participant.identity}
                lastItem={dummyParticipants.length === index + 1}
                participant={participant}
                identity={participant.identity}
                />
            )
        })}
    </div>
};

export default Participants;
