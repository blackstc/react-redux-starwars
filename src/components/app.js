import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pageNum: 0
    }
    this.onNextClick = this.onNextClick.bind(this);
    this.onPreviousClick = this.onPreviousClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchPeople();
  }

  onNextClick() {
    if (this.props.next) {
      this.setState({ pageNum: this.state.pageNum + 10 })
      this.props.fetchPeople(this.props.next);
    }
  }

  onPreviousClick() {
    if (this.props.previous) {
      this.setState({ pageNum: this.state.pageNum - 10 })
      this.props.fetchPeople(this.props.previous);
    }
  }

  render() {
    if (!this.props.people.length) {
      return <div>Loading...</div>
    }
    console.log(this.props);
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
                  <th scope="row">{this.state.pageNum + i + 1}</th>
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onPreviousClick}
          >
          Previous Page
        </button>
        <button
          type="button"
          style={{ margin: '10px' }}
          className="btn btn-primary"
          onClick={this.onNextClick}
          >
          Next Page
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    next: state.people.next,
    people: state.people.all,
    previous: state.people.previous
  }
}

export default connect(mapStateToProps, actions)(App)
