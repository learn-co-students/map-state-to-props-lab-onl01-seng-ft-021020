import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        {console.log(this.props.users)}
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map((user,index) =>(<li key={index}>Username:{user.username} Hometown: {user.hometown} </li>))}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state){
return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
