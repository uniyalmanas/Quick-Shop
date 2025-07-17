import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "../../../config/inngest.js";


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

