import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from "graphql";

import makesData from "../data/makes.json";

const MakeType = new GraphQLObjectType({
  name: "MakeType",
  description: "Car Make",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
});

const makes = {
  type: GraphQLList(MakeType),
  resolve: () => makesData
};

export default { makes };
