import { gql } from "apollo-server-core";

export default gql`
  type LoginResult {
    ok: Boolean!
    error: String
    token: String
  }

  type Query {
    login(userName: String, password: String): LoginResult
  }
`;
