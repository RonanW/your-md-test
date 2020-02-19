import * as types from './actionTypes'
import 'isomorphic-fetch'

const resourceUrl = `${process.env.API_URL}/conditions`

const getConditions = () => {
  return fetch(resourceUrl)
    .then(res => res.json())
    .catch(error => {
      throw error
    })
}

const loadConditionsSuccess = conditions => {
  return { type: types.LOAD_CONDITIONS_SUCCESS, payload: conditions }
}

export const loadConditions = () => dispatch => {
  return getConditions()
    .then(conditions => dispatch(loadConditionsSuccess(conditions)))
    .catch(error => {
      throw error
    })
}
