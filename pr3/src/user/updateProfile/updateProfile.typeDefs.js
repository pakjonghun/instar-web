import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    updateProfile(
      userName: String
      password: String
      avatar: Upload
      id: Int!
    ): Result
  }
`;
