import client from "../../../client";
import { hashPassword, protectResolver, upload } from "../../../util";

export default {
  Mutation: {
    updateProfile: protectResolver(
      async (_, { id, userName, avatar, password }) => {
        const user = await client.user.findUnique({ where: { id } });
        if (!user) {
          return {
            ok: false,
            error: "No user",
          };
        }

        const updateUser = await client.user.update({
          where: { id },
          data: {
            userName,
            password: await hashPassword(password),
            avatar: await upload(avatar),
          },
        });
        return {
          ok: false,
        };
      }
    ),
  },
};
