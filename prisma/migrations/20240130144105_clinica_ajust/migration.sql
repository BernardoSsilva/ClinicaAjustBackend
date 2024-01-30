/*
  Warnings:

  - You are about to drop the column `dateService` on the `schedule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "schedule" DROP COLUMN "dateService",
ADD COLUMN     "date_service" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
