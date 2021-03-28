import { loadFiles, loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "apollo-server-express";

const typeDefs = mergeTypeDefs(loadFilesSync(`${__dirname}/**/*.typeDefs.js`));
const resolvers = mergeResolvers(
  loadFilesSync(`${__dirname}/**/*.resolvers.js`)
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
