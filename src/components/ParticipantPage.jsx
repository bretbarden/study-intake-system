import ParticipantListCard from './ParticipantListCard'
import { useLoaderData } from 'react-router-dom'

function ParticipantPage() {

  const { participantObj } = useLoaderData()

  return (
    <div>
      <h2>{participantObj.firstName}</h2>
      <p>Click to view participant Info</p>
      <ParticipantListCard participantObj={participantObj} />
    </div>
  )
}

export default ParticipantPage



 
