import makeSchema from "./makeSchema";
import modelSchema from "./modelSchema";
import modelReviewsSchema from "./modelReviewsSchema";
import { GraphQLSchema, GraphQLObjectType } from "graphql";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    description: "Schema for Car Browser",
    fields: () => ({
      models: modelSchema.models,
      makes: makeSchema.makes,
      model: modelSchema.model,
      carOfTheWeek: modelReviewsSchema.carOfTheWeek
    })
  })
});
