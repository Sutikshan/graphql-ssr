import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

function SearchMake({ data, onMakeSelect, makeId }) {
  let { makes, loading } = data;
  if (loading) {
    makes = [];
  }

  return (
    <div>
      <select onChange={onMakeSelect} value={makeId}>
        <option>Select Car Make</option>
        {makes.map(make => {
          return (
            <option key={make.id} value={make.id}>
              {make.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

SearchMake.propTypes = {
  data: PropTypes.object,
  onMakeSelect: PropTypes.func.isRequired,
  makeId: PropTypes.number
};

export default graphql(
  gql`
    query SearchQuery {
      makes {
        id
        name
      }
    }
  `
)(SearchMake);
