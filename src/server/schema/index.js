const makeSchema = require('./makeSchema');
const modelSchema = require('./modelSchema');
const modelReviewsSchema = require('./modelReviewsSchema');
const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'Schema for Car Browser',
    fields: () => ({
      models: modelSchema.models,
      makes: makeSchema.makes,
      model: modelSchema.model,
      carOfTheWeek: modelReviewsSchema.carOfTheWeek
    })
  })
});
