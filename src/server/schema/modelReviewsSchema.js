import carOfTheWeekData, { modelId } from "../data/carOfTheWeek.json";
import { GraphQLObjectType, GraphQLString } from "graphql";
import { modelFields, modelResolver } from "./modelSchema";

const ModelReviewsType = new GraphQLObjectType({
  name: "ModelReviewsType",
  description: "Review of the Car Models",
  fields: () => ({
    review: { type: GraphQLString },
    ...modelFields
  })
});

const carOfTheWeek = {
  type: ModelReviewsType,
  resolve: () => {
    const modelData = modelResolver({
      id: modelId
    });
    return { ...carOfTheWeekData, ...modelData };
  }
};

export default { carOfTheWeek };
