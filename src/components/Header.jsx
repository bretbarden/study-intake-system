import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="main-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/form">Register New Participant</Link>
        <Link to="/registry">Participant Roster</Link>
        <Link to="/enrollmenttrends">Enrollment Trends</Link>
      </nav>

      <h1>Community Study System</h1>

      <h2>Supporting communities to conduct their own research</h2>


    </header>
  )
}

export default Header
