import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewParticipantForm() {
  const navigate = useNavigate()

  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [gender, setGender] = useState("")
  const [inmateId, setInmateId] = useState("")
  
  
  const handleChangeFirstName = e => setFirstName(e.target.value)
  const handleChangeLastName = e => setLastName(e.target.value)
  const handleChangePhone = e => setPhone(e.target.value)
  const handleChangeEmail = e => setEmail(e.target.value)
  const handleChangeBirthDate = e => setBirthDate(e.target.value)
  const handleChangeGender = e => setGender(e.target.value)
  const handleChangeInmateId = e => setInmateId(e.target.value)

  function handleSubmit(e) {
    e.preventDefault()

    // Randomly assign to either the program group or the control group
    const researchGroup = Math.random() < 0.5 ? "Control" : "Program"
    console.log("Research group assignment:", researchGroup)
    
    // Get current date and time as study entry date
    function getStudyEntryDate() {
      const now = new Date()
      
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      
      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
    }
    
    const studyEntryDate = getStudyEntryDate()
    console.log("Study entry date:", studyEntryDate)

    const OPTIONS = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        firstName, 
        lastName, 
        phone, 
        email, 
        birthDate, 
        gender, 
        inmateId,
        studyEntryDate, 
        researchGroup  
      })
    }

    fetch('http://localhost:3001/participants', OPTIONS)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then(() => navigate('/registry'))
      .catch(error => {
        console.error('Error submitting form:', error)
      })
  }

  return (
    <div className="new-participant-page">
      <form onSubmit={handleSubmit} className="participant-form">
        <h2>Enroll a New Participant</h2>

        <label htmlFor="firstName">First Name:</label>
        <input 
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChangeFirstName}
          value={firstName}
          placeholder="Enter first name"
          required
        />

        <br/>

        <label htmlFor="lastName">Last Name:</label>
        <input 
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChangeLastName}
          value={lastName}
          placeholder="Enter last name"
          required
        />

        <br/>

        <label htmlFor="phone">Phone Number:</label>
        <input 
          type="tel"
          id="phone"
          name="phone"
          onChange={handleChangePhone}
          value={phone}
          placeholder="Enter phone number"
        />

        <br/>

        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          id="email"
          name="email"
          onChange={handleChangeEmail}
          value={email}
          placeholder="Enter email address"
        />

        <br/>

        <label htmlFor="birthDate">Date of Birth:</label>
        <input 
          type="date"
          id="birthDate"
          name="birthDate"
          onChange={handleChangeBirthDate}
          value={birthDate}
        />

        <br/>

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          onChange={handleChangeGender}
          value={gender}
          required
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-binary">Non-binary</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>

        <br/>

        <label htmlFor="inmateId">Inmate ID:</label>
        <input 
          type="text"
          id="inmateId"
          name="inmateId"
          onChange={handleChangeInmateId}
          value={inmateId}
          placeholder="Enter inmate ID"
          required
        />

        <br/>

        <input
          type="submit"
          value="Enroll participant in study"
          className="submit-button"
        />
      </form>

      <img 
        src="https://handsonpeople.com.au/wp-content/uploads/elementor/thumbs/shutterstock_20093125131-ppngpnrewsxhm3fii7u8gp5gex4cit7vho9bgj09ce.jpg" 
        alt="Building Community" 
      />
    </div>
  )
}

export default NewParticipantForm