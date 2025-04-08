

function ParticipantJailStatusButton( { inmateData, setInmateData, currentInmateId, participantObj}) {

    
    // In the fetch, use if/then logic so that it doesn't fetch if there is no inmateId
    const handleFetchData = async () => {
        console.log(participantObj.inmateid)
        console.log(currentInmateId)
        if (participantObj.inmateid.trim() === '') {
        return;
        }
    
        try {
        const response = await fetch(`https://data.cityofnewyork.us/resource/7479-ugqb.json?inmateid=${participantObj.inmateid}&$$app_token=521Ni3NMNKgfdeYfAhkt5Uj0M`);
        const data = await response.json();
        setInmateData(data[0]); 
        } catch (error) {
        console.error('Error in fetch:', error);
        }
    };
    
    return (
        <div>
            <button onClick={handleFetchData}>Check Incarceration Status</button>
            {inmateData && (
                <div>
                    <h2>Incarceration Status</h2>
                    <ul>
                        {Object.keys(inmateData).map((key) => (
                            <li key={key}>
                                <strong>{key}:</strong> {inmateData[key]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
    
}
      


export default ParticipantJailStatusButton
