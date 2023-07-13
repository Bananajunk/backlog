import type { z } from "zod";

import getAuth from "./auth";
import { Game } from "./schema";

export const getLatestReleases = async () => {
  const auth = await getAuth();

  const response = await fetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: new Headers({
      "Client-ID": String(process.env.TWITCH_CLIENT_ID),
      Authorization: `Bearer ${auth.access_token}`,
    }),
    body: `fields name, version_title, cover.image_id, first_release_date, platforms.slug, platforms.name, platforms.platform_logo.image_id;
      where version_parent = null & first_release_date < ${Math.floor(
        new Date().getTime() / 1000
      )};
      sort first_release_date desc;
      limit 25;`,
  });

  const data = await response.json();
  return data.map((data: unknown) => Game.parse(data)) as z.infer<
    typeof Game
  >[];
};
