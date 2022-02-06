-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `articles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `category_id` INTEGER NOT NULL,
    `support` VARCHAR(255) NULL,
    `order` TEXT NULL,
    `description` TEXT NULL,

    INDEX `fk_category_id`(`category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `galeries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `photographies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `picture` VARCHAR(50) NOT NULL,
    `miniature` VARCHAR(50) NULL,
    `article_id` INTEGER NULL,
    `galery_id` INTEGER NULL,

    INDEX `fk_article_id`(`article_id`),
    INDEX `fk_galery_id`(`galery_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `articles` ADD CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `photographies` ADD CONSTRAINT `fk_article_id` FOREIGN KEY (`article_id`) REFERENCES `articles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `photographies` ADD CONSTRAINT `fk_galery_id` FOREIGN KEY (`galery_id`) REFERENCES `galeries`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
