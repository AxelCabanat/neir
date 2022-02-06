/*
  Warnings:

  - You are about to drop the `photographies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `photographies` DROP FOREIGN KEY `fk_article_id`;

-- DropForeignKey
ALTER TABLE `photographies` DROP FOREIGN KEY `fk_galery_id`;

-- AlterTable
ALTER TABLE `articles` ADD COLUMN `miniature` VARCHAR(50) NULL,
    ADD COLUMN `picture` VARCHAR(50) NULL;

-- AlterTable
ALTER TABLE `galeries` ADD COLUMN `miniature` VARCHAR(50) NULL,
    ADD COLUMN `picture` VARCHAR(50) NULL;

-- DropTable
DROP TABLE `photographies`;
