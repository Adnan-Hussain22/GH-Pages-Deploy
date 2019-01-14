import React from "react";
import {connect} from 'react-redux'
import { authActions } from "../../Redux/Actions";
class Judge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stars: 0, available: false };
  }

  componentWillReceiveProps(nextProps,preProps){
    console.log('Judge Props==>',nextProps);
  }

  render() {
    return (
      <div>
        <h1>Judge</h1>
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
)(Judge);
