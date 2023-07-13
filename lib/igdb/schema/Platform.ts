import { z } from "zod";
import PlatformLogo from "./PlatformLogo";

export default z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  platform_logo: PlatformLogo.default({}),
});
