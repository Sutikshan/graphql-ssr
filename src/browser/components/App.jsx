import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { carOfTheWeekQuery } from "./queries";

export function App(graphqlResponse) {
  let { carOfTheWeek, loading } = graphqlResponse.data;

  if (loading) {
    carOfTheWeek = {
      imageUrl: undefined,
      review: "loading"
    };
  }

  return (
    <div>
      <h1>Car of the Week</h1>
      <div className="detail-page">
        <img
          className="car-image"
          alt="loading..."
          src={carOfTheWeek.imageUrl}
        />
        <div className="review-text">{carOfTheWeek.review}</div>
        <Link to="/search">
          <button className="search-button">Search Catalog</button>
        </Link>
      </div>
    </div>
  );
}

export default graphql(carOfTheWeekQuery)(App);
