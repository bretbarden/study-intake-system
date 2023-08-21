import { useNavigate } from 'react-router-dom'
import placeholder from '../assets/participant-placeholder.png'

function ParticipantListCard({ participantObj }) {

  const navigate = useNavigate()



  return (
    <div className="participant-card" onClick={ () => navigate(`/registry/${participantObj.id}`) }>

      <img src={participantObj.img_url || placeholder} alt={participantObj.name} />
      <h2> { participantObj.firstName }</h2>
      <h3> { participantObj.lastName }</h3>
      <p> { participantObj.phone } </p>
      <p> { participantObj.email } </p>
      <p> { participantObj.birthDate } </p>
      <p> { participantObj.gender } </p>
      <p> { participantObj.studyEntryDate } </p>
      <p> { participantObj.researchGroup } </p>
    </div>
  )

}

export default ParticipantListCard
