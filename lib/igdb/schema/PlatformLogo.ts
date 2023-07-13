import { randomInt } from "crypto";
import { z } from "zod";

const IMAGE_URL = "https://images.igdb.com/igdb/image/upload/t_logo_med";

const overrides: { [index: string]: string } = {
  pleu: "pl6b",
  pl6f: "pl6e",
};

export default z.object({
  id: z.number().default(randomInt(1000000)),
  image_id: z
    .string()
    .default("nocover")
    .transform((id) => `${IMAGE_URL}/${overrides[id] ?? id}.png`),
  width: z.number().default(264),
  height: z.number().default(352),
});
