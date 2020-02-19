import * as types from '../actions/actionTypes'

const conditionsInitialState = {
  conditions: [],
}

export default (state = conditionsInitialState, action) => {
  switch (action.type) {
    case types.LOAD_CONDITIONS_SUCCESS:
      return { ...state, conditions: action.payload }
    default:
      return state
  }
}
