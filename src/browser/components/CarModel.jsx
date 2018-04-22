import React, { Component } from "react";
import PropTypes from "prop-types";
import { createFragmentContainer, graphql, QueryRenderer } from "react-relay";
import environment from "../environment";

const modelQuery = graphql`
  query ModelQuery {
    model(id: 220) {
      name
      imageUrl
    }
  }
`;

class CarModel extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={modelQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <div>
                <div>{this.props.model.name}</div>
                <img src={this.props.model.imageUrl} />
              </div>
            );
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

CarModel.propTypes = {
  model: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
  })
};

export default createFragmentContainer(
  CarModel,
  graphql`
    fragment CarModel_model on CarModel {
      name
      imageUrl
    }
  `
);
