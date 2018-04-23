import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { getModelsByMake } from "./queries";

export function SearchModel({ data, onModelSelect, modelId }) {
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
  data: PropTypes.shape({
    models: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
      })
    )
  }),
  onModelSelect: PropTypes.func.isRequired,
  makeId: PropTypes.number,
  modelId: PropTypes.number
};

export default graphql(getModelsByMake)(SearchModel);
