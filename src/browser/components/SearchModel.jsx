import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

function SearchModel({ data, onModelSelect, modelId }) {
  let { models, loading } = data;
  if (loading) {
    models = [];
  }

  return (
    <div>
      <select onChange={onModelSelect} value={modelId}>
        <option>Select Car Model</option>
        {models.map(model => {
          return (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

SearchModel.propTypes = {
  data: PropTypes.object,
  onModelSelect: PropTypes.func.isRequired,
  makeId: PropTypes.number,
  modelId: PropTypes.number
};

export default graphql(
  gql`
    query SearchQuery($makeId: Int!) {
      models(makeId: $makeId) {
        id
        name
      }
    }
  `
)(SearchModel);
