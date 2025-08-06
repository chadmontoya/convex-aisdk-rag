import { authTables } from "@convex-dev/auth/server";
import { defineSchema } from "convex/server";

const schema = defineSchema({
  ...authTables,
  // other tables
});

export default schema;
