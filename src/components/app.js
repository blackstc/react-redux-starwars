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
    console.log('people', this.props.people);
    if (!this.props.people) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Vehicles</th>
              <th>Homeworld</th>
            </tr>
          </thead>
          <tbody>
            {this.props.people.map((person, i) => {
                return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{person.name}</td>
                  <td>{person.gender}</td>
                  <td>{person.height}</td>
                  <td>{person.mass}</td>
                  <td>{person.vehicles.length}</td>
                  <td>{person.homeworld.length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button type="button" className="btn btn-Primary">Previous Page</button>
        <button type="button" className="btn btn-primary">Next Page</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { people: state.people.all }
}

export default connect(mapStateToProps, actions)(App)
