import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { makeQuery } from "./queries";

export function SearchMake({ data, onMakeSelect, makeId }) {
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
  data: PropTypes.shape({
    makes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
      })
    )
  }),
  onMakeSelect: PropTypes.func.isRequired,
  makeId: PropTypes.number
};

export default graphql(makeQuery)(SearchMake);
