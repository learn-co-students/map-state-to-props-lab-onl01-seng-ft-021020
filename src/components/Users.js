import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    // debugger
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username} from {user.hometown}</li>)}
          <p>{this.props.userCount}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  debugger
  return{ users: state.users, userCount: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
