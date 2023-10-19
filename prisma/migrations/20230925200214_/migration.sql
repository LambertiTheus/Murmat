/*
  Warnings:

  - The values [MITSUE] on the enum `Seguradora` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Seguradora_new" AS ENUM ('AZUL', 'PORTO', 'ITAU', 'MITSUI', 'PORSCHE');
ALTER TABLE "Servico" ALTER COLUMN "seguradora" TYPE "Seguradora_new" USING ("seguradora"::text::"Seguradora_new");
ALTER TYPE "Seguradora" RENAME TO "Seguradora_old";
ALTER TYPE "Seguradora_new" RENAME TO "Seguradora";
DROP TYPE "Seguradora_old";
COMMIT;
