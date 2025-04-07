-- First, create a temporary column
ALTER TABLE "Card" ADD COLUMN "services_array" TEXT[];

-- Then, for each row, set the new column value based on the old column
UPDATE "Card" SET "services_array" = ARRAY[services] WHERE services IS NOT NULL;
UPDATE "Card" SET "services_array" = ARRAY['default'] WHERE services IS NULL;

-- Drop the old column
ALTER TABLE "Card" DROP COLUMN "services";

-- Rename the new column to match the original name
ALTER TABLE "Card" RENAME COLUMN "services_array" TO "services";

-- Add the default value constraint to the renamed column
ALTER TABLE "Card" ALTER COLUMN "services" SET DEFAULT ARRAY['default'];