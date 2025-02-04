-- CreateTable
CREATE TABLE "BlogPage" (
    "id" TEXT NOT NULL,
    "pageName" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "charts" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlogPage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlogPage_pageName_key" ON "BlogPage"("pageName");
