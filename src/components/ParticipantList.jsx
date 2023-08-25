import ParticipantListCard from "./ParticipantListCard"
import { useLoaderData } from 'react-router-dom'
import {useState} from 'react'



function ParticipantList() {
  const [searchTerm, setSearchTerm] = useState('');
  const { participants } = useLoaderData();

  const filteredParticipants = participants.filter(participantObj =>
    participantObj.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participantObj.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mappedParticipants = filteredParticipants.map(participantObj => (
    <ParticipantListCard key={participantObj.id} participantObj={participantObj} />
  ));

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="participant-list">
        {mappedParticipants}
      </div>
    </div>
  );
}

export default ParticipantList;