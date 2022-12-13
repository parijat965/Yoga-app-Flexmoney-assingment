-- CreateTable
CREATE TABLE `registeredUser` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `age` INTEGER NOT NULL,
    `gender` VARCHAR(200) NOT NULL,
    `startingDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `batcheId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `registeredUser_id_key`(`id`),
    UNIQUE INDEX `registeredUser_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `batches` (
    `id` VARCHAR(191) NOT NULL,
    `from` VARCHAR(191) NOT NULL,
    `to` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `batches_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `registeredUser` ADD CONSTRAINT `registeredUser_batcheId_fkey` FOREIGN KEY (`batcheId`) REFERENCES `batches`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
