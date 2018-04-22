import React, { Component } from "react";
import PropTypes from "prop-types";
import { createFragmentContainer, graphql, QueryRenderer } from "react-relay";
import environment from "../environment";

const SearchCatalogQuery = graphql`
  query SearchCatalogQuery {
    makes {
      id
      name
    }
  }
`;

class SearchCatalog extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={SearchCatalogQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <div>
                <div>{this.props.makes[0].name}</div>
              </div>
            );
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

SearchCatalog.propTypes = {
  makes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string
    })
  ),
  model: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string
  })
};

export default createFragmentContainer(
  SearchCatalog,
  graphql`
    fragment SearchCatalog_makes on SearchCatalog {
      id
      name
    }
  `
);
