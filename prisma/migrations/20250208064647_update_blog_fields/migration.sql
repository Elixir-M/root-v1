-- CreateTable
ALTER TABLE "BlogPage" 
ADD COLUMN "subheading" TEXT DEFAULT '',
ADD COLUMN "minuteRead" INTEGER DEFAULT 5,
ADD COLUMN "author" TEXT DEFAULT '',
ADD COLUMN "intro" TEXT DEFAULT '',
ADD COLUMN "solution" TEXT DEFAULT '',
ADD COLUMN "conclusion" TEXT DEFAULT '';

-- Make columns NOT NULL
ALTER TABLE "BlogPage" 
ALTER COLUMN "subheading" SET NOT NULL,
ALTER COLUMN "minuteRead" SET NOT NULL,
ALTER COLUMN "author" SET NOT NULL,
ALTER COLUMN "intro" SET NOT NULL,
ALTER COLUMN "solution" SET NOT NULL,
ALTER COLUMN "conclusion" SET NOT NULL;

-- Remove defaults
ALTER TABLE "BlogPage" 
ALTER COLUMN "subheading" DROP DEFAULT,
ALTER COLUMN "minuteRead" DROP DEFAULT,
ALTER COLUMN "author" DROP DEFAULT,
ALTER COLUMN "intro" DROP DEFAULT,
ALTER COLUMN "solution" DROP DEFAULT,
ALTER COLUMN "conclusion" DROP DEFAULT;