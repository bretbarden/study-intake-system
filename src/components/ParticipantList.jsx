import ParticipantListCard from "./ParticipantListCard"
import { useLoaderData } from 'react-router-dom'

function ParticipantList() {

  const { participants } = useLoaderData()

  const mappedParticipants = participants.map(participantObj => (
    <ParticipantListCard key={participantObj.id} participantObj={participantObj} />
  ))

  return (
    <div className="participant-list">
      { mappedParticipants }
    </div>
  )
}

export default ParticipantList
