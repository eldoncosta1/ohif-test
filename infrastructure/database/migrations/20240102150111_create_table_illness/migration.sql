-- CreateTable
CREATE TABLE `illnesses` (
    `id` VARCHAR(191) NOT NULL,
    `illness_type` ENUM('NoIllness', 'MildIllness', 'AdvancedIllness') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
