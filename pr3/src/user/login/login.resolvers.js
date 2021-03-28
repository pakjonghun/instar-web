import JWT from "jsonwebtoken";

import client from "../../../client";
import { isLogin } from "../../../util";

export default {
  Query: {
    login: async (_, { userName, password }) => {
      const user = await client.user.findFirst({ where: { userName } });
      if (!user) {
        return {
          ok: false,
          error: "No user!",
        };
      }

      if (isLogin(password, userName)) {
        const token = await JWT.sign({ id: user.id }, process.env.SECRET);

        return { ok: true, token };
      } else if (!isLogin) {
        return {
          ok: false,
          error: "Wrong password",
        };
      }
    },
  },
};
