import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Car of the Week</h1>
        <img className="car-image" src={this.props.carOfTheWeek.imageUrl} />
        <div className="review-text">{this.props.carOfTheWeek.review}</div>
      </div>
    );
  }
}

App.propTypes = {
  carOfTheWeek: PropTypes.object
};
export default App;
