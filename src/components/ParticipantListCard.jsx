import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import placeholder from '../assets/participant-placeholder.png'
import ParticipantJailStatus  from './ParticipantJailStatus'
import ParticipantJailStatusButton  from './ParticipantJailStatusButton'

function ParticipantListCard({ participantObj }) {

  const navigate = useNavigate()

  // Set states for the cards of who is selected
  const [inmateData, setInmateData] = useState(null);
  const [currentInmateId, setCurrentInmateId] = useState('');
  


  return (
    <div className="participant-card" onClick={ () => navigate(`/registry/${participantObj.id}`) }>

      <img src={participantObj.img_url || placeholder} alt={participantObj.name} />
      <h2> { participantObj.firstName }</h2>
      <h3> { participantObj.lastName }</h3>
      <p> { participantObj.phone } </p>
      <p> { participantObj.email } </p>
      <p> Birth Date: { participantObj.birthDate } </p>
      <p> { participantObj.gender } </p>
      <p> Study Entry Date: { participantObj.studyEntryDate } </p>
      <p> { participantObj.researchGroup } Group</p>
      <ParticipantJailStatusButton participantObj={participantObj} inmateData={inmateData} setInmateData={setInmateData} currentInmateId={currentInmateId} setCurrentInmateID={setCurrentInmateId}/>
    </div>
  )

}

export default ParticipantListCard
