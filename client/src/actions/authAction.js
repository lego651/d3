import { CONSTANTS } from '../actions'

export const loginUser = (username, time) => {
  return dispatch => {
    return dispatch({
      type: CONSTANTS.LOG_IN,
      username,
      time
    })
  }
}
