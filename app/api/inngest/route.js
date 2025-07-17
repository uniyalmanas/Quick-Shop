import { serve } from "inngest/next";
import { inngest } from "QuickCart/inngest/client.js";
import { syncUserCreation, syncUserDeletion, syncUserUpdation } from "QuickCart/inngest/client.js";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
      syncUserCreation,
      syncUserUpdation,
      syncUserDeletion
  ],
});

