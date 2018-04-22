import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

function ModelDetails({ data }) {
  let { model, loading } = data;
  if (loading) {
    model = {
      price: 0
    };
  }

  return (
    <div>
      <h1>{model.name}</h1>
      <div className="detail-page">
        <img className="car-image" alt="loading..." src={model.imageUrl} />
        <div className="review-text">
          Price: ${model.price.toLocaleString()}
        </div>
        <Link to="/search">
          <button className="search-button">Back to Search</button>
        </Link>
      </div>
    </div>
  );
}

ModelDetails.propTypes = {
  data: PropTypes.object
};

const ModelDetailsWithQuery = graphql(
  gql`
    query SearchQuery($modelId: Int!) {
      model(id: $modelId) {
        id
        makeId
        name
        price
        imageUrl
      }
    }
  `,
  {
    options: ({ match }) => ({
      variables: {
        modelId: match.params.modelId
      }
    })
  }
)(ModelDetails);

export default ModelDetailsWithQuery;
