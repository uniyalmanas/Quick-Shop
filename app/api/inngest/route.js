import { serve } from "inngest/next";
import { inngest, syncUserUpdation } from "@/config/inngest";
import { syncUserCreation, syncUserDeletion } from "@/functions/inngest"; // Assuming the functions are not in config

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
});
