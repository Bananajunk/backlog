"use server";

import prisma from "~/lib/prisma";
import { Game } from "@prisma/client";

export const addToBacklog = async (gameId: number): Promise<Game> => {
  console.log(`Adding ${gameId} to ${process.env.BACKLOG_ID}`);
  return await prisma.game.upsert({
    where: {
      backlog_entry: {
        backlogId: process.env.BACKLOG_ID!,
        resource_id: gameId,
      },
    },
    update: {},
    create: { backlogId: process.env.BACKLOG_ID!, resource_id: gameId },
  });
};
