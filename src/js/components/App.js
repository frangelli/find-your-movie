import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { applicationStarted } from '../actions';
import SearchField from './SearchField';
import MoviesList from './MoviesList';

require('./App.scss');
class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.applicationStarted();
  }

  render() {
    return (
      <div className="main">
        {this.props.children}
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    applicationStarted
  }, dispatch);
}

function mapStateToProps(state) {
  return {
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
