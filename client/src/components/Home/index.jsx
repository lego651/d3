import React, { Component } from 'react';
import { connect } from 'react-redux'

import Chat from '../ChatContainer'
import Login from '../LoginContainer'
import { loginUser } from '../../actions'

class Home extends Component {
  componentDidMount() {
    const username = sessionStorage.getItem('username');
    const loginTime = sessionStorage.getItem('loginTime');
    if(username && loginTime && username.length > 0 && loginTime.length > 0) {
      this.props.loginUser(username, loginTime);
    }
  }
  render() {
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
)(Home)
