import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { applicationStarted } from '../actions';
import SearchField from './SearchField';
import MoviesList from './MoviesList';
import Header from './Header';

require('./SearchView.scss');
class SearchView extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.applicationStarted();
  }

  render() {
    return (
      <div className="main">
        <Header />
        <SearchField />
        <MoviesList />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
