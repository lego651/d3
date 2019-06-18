import { CONSTANTS } from '../actions'

// export const loginUser = (username, time) => {
//   return dispatch => {
//     return dispatch({
//       type: CONSTANTS.LOG_IN,
//       username,
//       time
//     })
//   }
// }

export const loginUser = (username, time) => {
  sessionStorage.setItem('username', username)
  sessionStorage.setItem('loginTime', time)
  return {
    type: CONSTANTS.LOG_IN,
    username,
    time
  }
}
