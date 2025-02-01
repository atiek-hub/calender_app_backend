/*
  Warnings:

  - Added the required column `end_date` to the `schedules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `schedules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `schedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `schedules` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `end_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN `start_date` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
