import client from "../../../client";
import { hashPassword, upload } from "../../../util";

export default {
  Mutation: {
    createAccount: async (_, { avatar, userName, password }) => {
      const existUser = await client.user.count({ where: { userName } });
      if (existUser) {
        return {
          ok: false,
          error: "User is already exists",
        };
      }

      const newUser = await client.user.create({
        data: { userName, password: await hashPassword(password) },
      });

      if (avatar) {
        const url = await upload(avatar, userName.id, "avatar");
        await client.user.update({
          where: { id: newUser.id },
          data: { avatar: url },
        });
      }

      console.log(newUser);
      return {
        ok: true,
      };
    },
  },
};
