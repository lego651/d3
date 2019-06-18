import React, { Component } from 'react';
import { connect } from 'react-redux'

import SideNav from '../SideNav'
import ChatRoom from '../ChatRoom'
import { loginUser, getRoomInfo } from '../../actions'
import './style.css'

class Chat extends Component {
  componentDidMount() {
    // const username = sessionStorage.getItem('username');
    // const loginTime = sessionStorage.getItem('loginTime');
    // if(username && loginTime && username.length > 0 && loginTime.length > 0) {
    //   this.props.loginUser(username, loginTime);
    // }
    this.interval = setInterval(() => {
      if(this.props.match) {
        const id = this.props.match.params.id
        this.props.getRoomInfo(id)
      }
    }, 1000);
  }
  componentDidUpdate(prevProps) {
    if(prevProps.match) {
      if(prevProps.match.params.id !== this.props.match.params.id) {
        const id = this.props.match.params.id
        this.props.getRoomInfo(id)
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){
    const {
      username,
      loginTime,
      roomList,
      roomInfo,
      match,
    } = this.props
    return(
      <div className="chat-container">
        <SideNav username={username}
                 loginTime={loginTime}
                 roomList={roomList} />
        {
          match
          ? <ChatRoom selectedRoom={roomInfo[0]}
                      username={username} />
           : <div className="main-content">
               Choose a room to start chatting...
             </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.auth.username,
  loginTime: state.auth.loginTime,
  roomList: state.roomList,
  roomInfo: state.roomInfo
})
const mapDispatchToProps = (dispatch) => ({
  loginUser: (username, time) => dispatch(loginUser(username, time)),
  getRoomInfo: (id) => dispatch(getRoomInfo(id)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
