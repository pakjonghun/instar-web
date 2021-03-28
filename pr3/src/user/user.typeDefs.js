import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: Int
    userName: String
    password: String
    avatar: Upload
    createdAt: String
    updatedAt: String
    # record: Record[]
    # notices: [Notice]
    # likes: [Like]
    # comments: [Comment]
    # files: [File]

    isMe: Boolean!
  }
`;
