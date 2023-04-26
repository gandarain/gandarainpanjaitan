import { useReducer, createContext } from 'react'
import { active_index } from './reducers/active_index'

const initialState = {
  active_index: 0,
}

const Context = createContext({})

const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action)
  return state
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(active_index), initialState)
  const value = { state, dispatch }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export { Context, Provider }