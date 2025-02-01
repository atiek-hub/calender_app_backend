/*
  Warnings:

  - You are about to drop the column `user_id` on the `schedules` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `schedules` DROP FOREIGN KEY `schedules_user_id_fkey`;

-- DropIndex
DROP INDEX `schedules_user_id_fkey` ON `schedules`;

-- AlterTable
ALTER TABLE `schedules` DROP COLUMN `user_id`;
