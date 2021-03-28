import { getUserTypesFromSchema } from "@graphql-tools/utils";

export default {
  User: {
    isMe: ({ id }, _, { getUser }) => id === getUser.id,
  },
};
