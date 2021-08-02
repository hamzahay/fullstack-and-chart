import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Auth.css'
import { login, register } from '../store/action'

export default function Auth () {
  const dispatch = useDispatch()
  const history = useHistory()
  const [toStatus, setToStatus] = useState('Login')
  const [data, setData] = useState({ email: '', password: '' })

  useEffect(() => {
    if (localStorage.access_token) {
      history.push('/')
    }
  }, [history])

  function toRegis (e) {
    e.preventDefault()
    if (toStatus === 'Register') {
      setToStatus('Login')
    } else {
      setToStatus('Register')
    }
  }

  function auth (e) {
    e.preventDefault()
    if (toStatus === 'Login') {
      dispatch(login(data, toMain))
    } else if (toStatus === 'Register') {
      dispatch(register(data, toMain))
    }
  }

  function toMain () {
    history.push('/')
  }

  return (
    <div className="outer">
      <div className="loginContainer">
        <h1>{ toStatus }</h1>
        <form className="loginForm">
          <label>Email</label>
          <input type="email" onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} placeholder="Email Here" required />
          <label>Password</label>
          <input type="password" onChange={(e) => setData({ ...data, password: e.target.value })} value={data.password} placeholder="Your Password" required />
          { toStatus === 'Login' ? 
            <div className="toRegisContainer">
              <span>don't have an account yet?</span>
              <button type="button" onClick={toRegis} className="toRegis">register</button>
            </div>
          : 
            <div className="toRegisContainer">
              <span>already have an account?</span>
              <button type="button" onClick={toRegis} className="toRegis">login</button>
            </div>
          }
          <button className="submitBtn" onClick={e => auth(e)} type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}