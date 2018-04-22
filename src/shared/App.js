import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return <div>{this.props.carOfTheWeek.review}</div>;
  }
}

App.propTypes = {
  carOfTheWeek: PropTypes.object
};
export default App;
