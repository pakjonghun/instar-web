import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    createAccount(avatar: Upload, password: String!, userName: String!): Result
  }
`;

// userName: String!, password: String!, avatar: Upload
