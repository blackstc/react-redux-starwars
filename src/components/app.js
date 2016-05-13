import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  componentWillMount() {
    this.props.fetchPeople();
  }


  render() {
    return (
      <div>React simple starter</div>
    );
  }
}

function mapStateToProps(state) {
  return { people: state.people.all }
}

export default connect(mapStateToProps, actions)(App)
