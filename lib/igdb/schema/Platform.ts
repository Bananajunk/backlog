import { z } from "zod";

export default z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
});
