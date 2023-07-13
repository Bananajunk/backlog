import { z } from "zod";
import CoverImage from "./CoverImage";
import Platform from "./Platform";

export default z.object({
  id: z.number(),
  name: z.string(),
  first_release_date: z.number(),
  cover: CoverImage.default({}),
  platforms: z.array(Platform),
});
