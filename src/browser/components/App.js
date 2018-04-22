import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

function App(graphqlResponse) {
  if (graphqlResponse.data.loading) {
    return <div>Loading</div>;
  }

  const { carOfTheWeek } = graphqlResponse.data;

  return (
    <div>
      <h1>Car of the Week</h1>
      <div className="home-page">
        <img className="car-image" src={carOfTheWeek.imageUrl} />
        <div className="review-text">{carOfTheWeek.review}</div>
        <button className="search-button">Search Catalog</button>
      </div>
    </div>
  );
}

export default graphql(
  gql`
    query AppQuery {
      carOfTheWeek {
        id
        name
        imageUrl
        review
      }
    }
  `
)(App);
