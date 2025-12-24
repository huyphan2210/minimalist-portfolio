import { config } from "process";

export default {
  "schemas-to-ts": {
    enabled: true,
    config: {
      output: "../../portfolio/src/interfaces",
      jwtSecret: process.env.JWT_SECRET,
    },
  },
};
