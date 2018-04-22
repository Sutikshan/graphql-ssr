import carOfTheWeekData, { modelId } from "../data/carOfTheWeek.json";
import { GraphQLObjectType, GraphQLString } from "graphql";
import modelSchema from "./modelSchema";

const ModelReviewsType = new GraphQLObjectType({
  name: "ModelReviewsType",
  description: "Review of the Car Models",
  fields: () => ({
    review: { type: GraphQLString },
    ...modelSchema.modelFields
  })
});

const carOfTheWeek = {
  type: ModelReviewsType,
  resolve: () => {
    const modelData = modelSchema.modelResolver({
      id: modelId
    });
    return { ...carOfTheWeekData, ...modelData };
  }
};

export default { carOfTheWeek };
