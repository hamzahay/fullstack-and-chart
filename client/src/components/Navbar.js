import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navbar.css'

export default function Navbar () {
  const history = useHistory()
  const email = useSelector(state => state.email)

  function logout () {
    localStorage.removeItem('email')
    localStorage.removeItem('access_token')
    history.push('/login')
  }

  return (
    <div className="navbar">
      <h2>LOGOGO</h2>
      <div className="rightContainer">
        <span>{ email }</span>
        <button className="logoutBtn" onClick={() => logout()} >Logout</button>
      </div>
    </div>
  )
}