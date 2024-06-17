/*
  Warnings:

  - Added the required column `hostel` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rollno` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hostel" TEXT NOT NULL,
ADD COLUMN     "rollno" TEXT NOT NULL;
