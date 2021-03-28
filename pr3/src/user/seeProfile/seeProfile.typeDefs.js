import { gql } from "apollo-server-core";

export default gql`
  type seeProfileResult {
    ok: Boolean!
    error: String
    user: User
  }

  type Query {
    seeProfile(id: Int, userName: String): seeProfileResult
  }
`;
