import { serve } from "inngest/next";
import { inngest } from "../../../functions/inngest";
import { syncUserCreation, syncUserDeletion } from "../../../functions/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
});
