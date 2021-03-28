/*
  Warnings:

  - Added the required column `noticeId` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" ADD COLUMN     "noticeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "File" ADD FOREIGN KEY ("noticeId") REFERENCES "Notice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
