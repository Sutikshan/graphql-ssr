const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const makesData = require('../data/makes.json');

const MakeType = new GraphQLObjectType({
  name: 'MakeType',
  description: 'Car Make',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  })
});

const makes = {
  type: GraphQLList(MakeType),
  resolve: () => makesData,
};

module.exports = { makes };