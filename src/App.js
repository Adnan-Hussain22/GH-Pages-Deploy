import React, { Component } from "react";
import "./App.css";
import { authActions } from "./Redux/Actions";
import { connect } from "react-redux";
import { Kid, Judge } from "./Components";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleComponent: true
    };
  }

  componentDidMount() {
    this.props.updateUser({
      mail: "email"
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.toggleComponent && <Kid />}
        {!this.state.toggleComponent && <Judge />}
        <button
          onClick={() =>
            this.setState({ toggleComponent: !this.state.toggleComponent })
          }
        >
          Toggle
        </button>
      </div>
    );
  }
}

//THis Function will get the updated store
const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.authReducers.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(authActions.updateUser(user)),
    removeUser: () => dispatch(authActions.removeUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
