import { filter, map, find } from "../data/models.json";
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString
} from "graphql";

const modelFields = {
  id: { type: GraphQLInt },
  makeId: { type: GraphQLInt },
  name: { type: GraphQLString },
  price: { type: GraphQLFloat },
  imageUrl: { type: GraphQLString }
};

const ModelType = new GraphQLObjectType({
  name: "ModelType",
  description: "Car Models",
  fields: () => modelFields
});

const models = {
  type: GraphQLList(ModelType),
  args: {
    makeId: { type: GraphQLInt }
  },
  resolve: (root, args) => {
    const modelListFields = m => ({ id: m.id, name: m.name, makeId: m.makeId });

    if (args.makeId) {
      const condition = model => model.makeId === args.makeId;

      return filter(condition).map(modelListFields);
    }

    return map(modelListFields);
  }
};

const modelResolver = args => {
  if (args.id) {
    return find(model => model.id === args.id);
  }

  throw new Error("id is mandatory argument to access a specfic model");
};

const model = {
  type: ModelType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: (root, args) => modelResolver(args)
};

export default { models, model, modelFields, modelResolver };
