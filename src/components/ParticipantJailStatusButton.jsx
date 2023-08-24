import React, { useState } from "react";


function ParticipantJailStatusButton( { inmateData, setInmateData, currentInmateId, setCurrentInmateId, participantObj}) {

    
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
        setInmateData(data[0]); // Assuming the API returns an array with one matching inmate. If it does not, will need to modify this line.
        } catch (error) {
        console.error('Error in fetch:', error);
        }
    };
    
    
    
    return (
        <div>
            <button onClick={handleFetchData}>Fetch Data</button>
            {inmateData && (
                <div>
                <h2>Inmate Information</h2>
                <pre>{JSON.stringify(inmateData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
      


export default ParticipantJailStatusButton
