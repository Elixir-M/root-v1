ALTER TABLE "Card" ADD COLUMN "services" TEXT DEFAULT 'default';

-- Make column NOT NULL
ALTER TABLE "Card" ALTER COLUMN "services" SET NOT NULL;

-- Remove default (optional, if you don't want Prisma to keep setting it)
ALTER TABLE "Card" ALTER COLUMN "services" DROP DEFAULT;
