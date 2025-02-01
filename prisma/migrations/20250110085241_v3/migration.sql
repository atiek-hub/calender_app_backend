/*
  Warnings:

  - You are about to drop the column `end_date` on the `schedules` table. All the data in the column will be lost.
  - You are about to drop the column `end_time` on the `schedules` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `schedules` table. All the data in the column will be lost.
  - You are about to drop the column `start_time` on the `schedules` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `schedules` DROP COLUMN `end_date`,
    DROP COLUMN `end_time`,
    DROP COLUMN `start_date`,
    DROP COLUMN `start_time`;
