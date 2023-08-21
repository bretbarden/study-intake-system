import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewParticipantForm() {

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState ("")
  const [phone, setPhone] = useState ()
  const [email, setEmail] = useState ("")
  const [birthDate, setBirthDate] = useState ("")
  const [gender, setGender] = useState ("")
  let [studyEntryDate, setStudyEntryDate] = useState ("")
  let [researchGroup, setResearchGroup] = useState ("")


  const handleChangeFirstName = e => setFirstName(e.target.value)
  const handleChangeLastName = e => setLastName(e.target.value)
  const handleChangePhone = e => setPhone(e.target.value)
  const handleChangeEmail= e => setEmail(e.target.value)
  const handleChangeBirthDate = e => setBirthDate(e.target.value)
  const handleChangeGender = e => setGender(e.target.value)
  // const handleChangeStudyEntryDate = e => setStudyEntryDate(e.target.value)
  // const handleChangeResearchGroup = e => setResearchGroup(e.target.value)



  function handleSubmit(e) {
    e.preventDefault()

    // Randomly assign the research group on submission with a let statement
    let randomInt = Math.floor(Math.random() * 2)
    if (randomInt = 0)  {researchGroup = "Control"}
      else if (randomInt = 1) {researchGroup = "Program"} 
    

    function getStudyEntryDate() {
      let now = new Date();
    
      let year = now.getFullYear();
      let month = String(now.getMonth() + 1).padStart(2, '0');
      let day = String(now.getDate()).padStart(2, '0');
      let hours = String(now.getHours()).padStart(2, '0');
      let minutes = String(now.getMinutes()).padStart(2, '0');
      let seconds = String(now.getSeconds()).padStart(2, '0');
    
      let formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      return formattedDateTime;
    }
    
    let studyEntryDate = getStudyEntryDate();
    console.log(studyEntryDate);

    
    

    const OPTIONS = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, phone, email, birthDate, gender, studyEntryDate, researchGroup})
    }

    fetch('http://localhost:5000/participants', OPTIONS)
    .then( res => res.json() )
    .then( () => navigate('/registry') )

  }

  return (

    <div className="new-participant-page">

      <form onSubmit={handleSubmit} className="participant-form">

        <h2>Enroll a New Participant</h2>

        <label htmlFor="firstName">First Name:</label>
        <input type="text"
          name="firstName"
          onChange={handleChangeFirstName}
          value={firstName}
          placeholder='Enter first name'
        />

        <br/>


        <label htmlFor="lastName">Last Name:</label>
        <input type="text"
          name="lastName"
          onChange={handleChangeLastName}
          value={lastName}
          placeholder='Enter last name'
        />

        <br/>

        <label htmlFor="phone">Phone Number:</label>
        <input type="text"
          name="phone"
          onChange={handleChangePhone}
          value={phone}
          placeholder='Enter phone number'
        />

        <br/>

        <label htmlFor="email">Email:</label>
        <input type="text"
          name="email"
          onChange={handleChangeEmail}
          value={email}
          placeholder='Enter email address'
        />

        <br/>

        <label htmlFor="birtDate">Date of Birth:</label>
        <input type="text"
          name="birthDate"
          onChange={handleChangeBirthDate}
          value={birthDate}
          placeholder='Enter date of birth'
        />

        <br/>

        <label htmlFor="gender">Gender:</label>
        <input type="text"
          name="gender"
          onChange={handleChangeGender}
          value={gender}
          placeholder='Enter gender'
        />

        <br/>

        <input
          type="submit"
          value="Enroll participant in study"
        />

      </form>

      <img src="https://handsonpeople.com.au/wp-content/uploads/elementor/thumbs/shutterstock_20093125131-ppngpnrewsxhm3fii7u8gp5gex4cit7vho9bgj09ce.jpg" alt={"Building Community"} />

    </div>

  )
}

export default NewParticipantForm
