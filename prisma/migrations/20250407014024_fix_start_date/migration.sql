/*
  Warnings:

  - You are about to drop the column `end_date` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `end` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Schedule` DROP COLUMN `end_date`,
    DROP COLUMN `start_date`,
    ADD COLUMN `end` DATETIME(3) NOT NULL,
    ADD COLUMN `start` DATETIME(3) NOT NULL;
