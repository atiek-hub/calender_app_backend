-- DropForeignKey
ALTER TABLE "schedules" DROP CONSTRAINT "schedules_userId_fkey";

-- AlterTable
ALTER TABLE "schedules" ALTER COLUMN "userId" SET DATA TYPE TEXT;
