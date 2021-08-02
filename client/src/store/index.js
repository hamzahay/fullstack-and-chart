import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  email: localStorage.email || '',
  incomes: []
}

function reducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'SET:EMAIL':
      return { ...state, email: payload }
    case 'SET:INCOMES':
      return { ...state, incomes: payload }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store