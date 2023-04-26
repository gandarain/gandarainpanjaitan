import actions from '../actions'

const { SET_ACTIVE_INDEX } = actions

const active_index = (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_INDEX:
      return { ...state, active_index: action.payload }
    default:
      return state
  }
}

export { active_index }