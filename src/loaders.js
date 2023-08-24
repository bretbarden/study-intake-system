export async function getParticipantsLoader() {
    const response = await fetch('http://localhost:5000/participants')
    const participants = await response.json()
    return { participants }
}


export async function singleParticipantLoader ( {params} ) {
    const response = await fetch(`http://localhost:5000/participants/${params.id}`)
    const participantObj = await response.json()
    return { participantObj }
}

