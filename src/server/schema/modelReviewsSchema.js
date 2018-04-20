const carOfTheWeekData = require('../data/carOfTheWeek.json');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const ModelReviewsType = new GraphQLObjectType({
  name: 'ModelReviewsType',
  description: 'Review of the Car Models',
  fields: () => ({
    modelId: { type: GraphQLInt },
    review: { type: GraphQLString },
  })
});

const carOfTheWeek = {
  type: ModelReviewsType,
  resolve: () => carOfTheWeekData,
}

module.exports = { carOfTheWeek }