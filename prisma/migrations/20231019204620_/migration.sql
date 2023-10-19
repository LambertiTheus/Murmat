/*
  Warnings:

  - Added the required column `viatura` to the `Servico` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Viatura" AS ENUM ('M110', 'M183');

-- AlterTable
ALTER TABLE "Servico" ADD COLUMN     "viatura" "Viatura" NOT NULL;
