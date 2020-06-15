import React, { Component } from "react";
import { connect } from "react-redux";
// add any needed imports here
class Users extends Component {
  render() {
    return (
      <div>
        <p>{this.props.users.length}</p>
        <ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users currently in the store */}
          {this.props.users.map((user,i) => (
            <li key={i}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => ({
  users: state.users,
});

// connect this component to Redux
export default connect(mapStateToProps)(Users);
