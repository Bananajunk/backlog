-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Backlog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Backlog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "resource_id" INTEGER NOT NULL,
    "backlogId" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Backlog_userId_key" ON "Backlog"("userId");

-- CreateIndex
CREATE INDEX "Backlog_userId_idx" ON "Backlog"("userId");

-- CreateIndex
CREATE INDEX "Game_backlogId_idx" ON "Game"("backlogId");

-- AddForeignKey
ALTER TABLE "Backlog" ADD CONSTRAINT "Backlog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_backlogId_fkey" FOREIGN KEY ("backlogId") REFERENCES "Backlog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
