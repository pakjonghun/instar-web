import { gql } from "apollo-server-core";

export default gql`
  scalar Upload

  type Result {
    ok: Boolean!
    error: String
  }

  type Query {
    dummy: String
  }
`;
