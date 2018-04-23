import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { getModelById } from "./queries";

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
  data: PropTypes.shape({
    models: PropTypes.shape({
      price: PropTypes.number,
      name: PropTypes.string,
      imageUrl: PropTypes.string
    })
  })
};

const ModelDetailsWithQuery = graphql(getModelById, {
  options: ({ match }) => ({
    variables: {
      modelId: match.params.modelId
    }
  })
})(ModelDetails);

export default ModelDetailsWithQuery;
