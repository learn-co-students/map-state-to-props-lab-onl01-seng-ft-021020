import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {console.log(this.props.users)}
          {this.props.users.map(user => <li><p>User: {user.username}</p><p>Hometown: {user.hometown}</p></li>)}
        </ul>
        <p>Total Users: {this.props.users.length}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {users: state.users} 
}

export default connect(mapStateToProps)(Users)
