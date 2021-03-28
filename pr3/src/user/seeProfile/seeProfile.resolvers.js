import client from "../../../client";
import { protectResolver } from "../../../util";

export default {
  Query: {
    seeProfile: protectResolver(async (_, { id, userName }) => {
      const user = await client.user.findFirst({
        where: { ...(id && { id }), ...(userName && { userName }) },
      });
      if (!user) {
        return {
          ok: false,
          error: "No user!",
        };
      }

      return {
        ok: true,
        user,
      };
    }),
  },
};
