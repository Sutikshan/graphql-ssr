import gql from "graphql-tag";

export const carOfTheWeekQuery = gql`
  query getCarOfTheWeek {
    carOfTheWeek {
      id
      name
      imageUrl
      review
    }
  }
`;

export const makeQuery = gql`
  query getMakes {
    makes {
      id
      name
    }
  }
`;

export const getModelsByMake = gql`
  query modelsByMake($makeId: Int!) {
    models(makeId: $makeId) {
      id
      name
    }
  }
`;

export const getModelById = gql`
  query SearchQuery($modelId: Int!) {
    model(id: $modelId) {
      id
      makeId
      name
      price
      imageUrl
    }
  }
`;
