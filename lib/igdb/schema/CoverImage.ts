import { z } from "zod";

const IMAGE_URL = "https://images.igdb.com/igdb/image/upload/t_cover_big";

export default z.object({
  id: z.number(),
  image_id: z.string().transform((id) => `${IMAGE_URL}/${id}.png`),
});
