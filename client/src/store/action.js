import axios from 'axios'

export function setEmail (payload) {
  return { type: 'SET:EMAIL', payload: payload}
}

export function register (payload, toMain) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:3001/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      console.log(response)
      dispatch(login(payload, toMain))
    } catch (err) {
      console.log(err)
    }
  }
}

export function login (payload, toMain) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:3001/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      localStorage.setItem('email', response.data.email)
      localStorage.setItem('access_token', response.data.access_token)
      dispatch(setEmail(response.data.email))
      toMain()
    } catch (err) {
      console.log(err)
    }
  }
}

export function setIncomesData (payload) {
  return { type: 'SET:INCOMES', payload: payload }
}

export function fetchIncomesData () {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:3001/incomes',
        headers: { access_token: localStorage.access_token }
      })
      dispatch(setIncomesData(response.data.incomes))
    } catch (err) {
      console.log(err)
    }
  }
}