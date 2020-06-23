import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
            <p>{this.props.users.length}</p>
          {this.props.users.map((user) => {
              return(
                <li>{user.username}</li>
              )
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
    return { users: state.users }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);
