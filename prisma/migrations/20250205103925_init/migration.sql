/*
  Warnings:

  - Made the column `pageName` on table `Card` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "pageName" SET NOT NULL,
ALTER COLUMN "pageName" SET DEFAULT 'default';
