/*
  Warnings:

  - A unique constraint covering the columns `[backlogId,resource_id]` on the table `Game` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Game_backlogId_resource_id_key" ON "Game"("backlogId", "resource_id");
