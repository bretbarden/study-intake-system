export async function getParticipantsLoader() {
    const response = await fetch('http://localhost:3001/participants')
    const participants = await response.json()
    return { participants }
}


export async function singleParticipantLoader ( {params} ) {
    const response = await fetch(`http://localhost:3001/participants/${params.id}`)
    const participantObj = await response.json()
    return { participantObj }
}

