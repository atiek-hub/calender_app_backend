/*
  Warnings:

  - Added the required column `allDay` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Made the column `start_date` on table `Schedule` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_date` on table `Schedule` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Schedule` ADD COLUMN `allDay` BOOLEAN NOT NULL,
    MODIFY `start_date` DATETIME(3) NOT NULL,
    MODIFY `end_date` DATETIME(3) NOT NULL;
