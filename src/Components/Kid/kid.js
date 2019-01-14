import React from "react";
import { authActions } from "../../Redux/Actions";
import {connect} from 'react-redux'
class Kid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps,preProps){
    console.log('Kid Props==>',nextProps);
  }

  render() {
    return <h1>Kid</h1>;
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
)(Kid);
