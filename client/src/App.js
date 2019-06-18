import React, { Component } from 'react';
import { connect } from 'react-redux'

import Chat from './components/ChatContainer'
import Login from './components/LoginContainer'
import { loginUser, getRoomInfo } from './actions'

class App extends Component {
  componentDidMount() {
    console.log('its called')
    const username = sessionStorage.getItem('username');
    const loginTime = sessionStorage.getItem('loginTime');
    if(username && loginTime && username.length > 0 && loginTime.length > 0) {
      console.log('session data is ok.')
      this.props.loginUser(username, loginTime);
    }
  }
  render() {
    console.log('App is rendered.')
    const { username } = this.props
    return (
      <div className="app-container">
        {
          username
          ? <Chat />
          : <Login />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.auth.username
})
const mapDispatchToProps = (dispatch) => ({
  loginUser: (username, time) => dispatch(loginUser(username, time)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
