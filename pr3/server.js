require("dotenv").config();
import express from "express";
import JWT from "jsonwebtoken";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import morgan from "morgan";
import { graphqlUploadExpress } from "graphql-upload";
import client from "./client";
const port = process.env.PORT;

const server = new ApolloServer({
  schema,
  uploads: false,
  context: async ({ req }) => {
    const { id } = JWT.verify(req.headers.auth, process.env.SECRET);
    const user = await client.user.findUnique({ where: { id } });
    return { getUser: user };
  },
});

const app = express();
app.use(morgan("dev"));
app.use(graphqlUploadExpress());

server.applyMiddleware({ app });
app.listen(port, () => console.log(`⚡️Server is running on ${port}`));
