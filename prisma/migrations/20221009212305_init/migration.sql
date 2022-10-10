-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(320) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `money` INTEGER NOT NULL DEFAULT 5000,
    `gold` INTEGER NOT NULL DEFAULT 0,
    `points` INTEGER NOT NULL DEFAULT 10,
    `points_to_get` INTEGER NOT NULL DEFAULT 0,
    `positionPlayer` ENUM('gk', 'df', 'mf', 'fw') NULL,
    `is_capitan` BOOLEAN NOT NULL DEFAULT false,
    `is_playing` BOOLEAN NOT NULL DEFAULT false,
    `team_id` INTEGER NULL,
    `games` INTEGER NOT NULL DEFAULT 0,
    `goals` INTEGER NOT NULL DEFAULT 0,
    `assists` INTEGER NOT NULL DEFAULT 0,
    `deffends` INTEGER NOT NULL DEFAULT 0,
    `clean_sheets` INTEGER NOT NULL DEFAULT 0,
    `power` INTEGER NOT NULL DEFAULT 25,
    `is_admin` BOOLEAN NOT NULL DEFAULT false,
    `is_verified` BOOLEAN NOT NULL DEFAULT false,
    `is_robot` BOOLEAN NOT NULL DEFAULT false,
    `gifts` INTEGER NOT NULL DEFAULT 1,
    `is_taken_gift` BOOLEAN NOT NULL DEFAULT false,
    `purchases` INTEGER NOT NULL DEFAULT 0,
    `is_bought` BOOLEAN NOT NULL DEFAULT false,
    `penalty` INTEGER NOT NULL DEFAULT 5,
    `reaction` INTEGER NOT NULL DEFAULT 5,
    `jumping` INTEGER NOT NULL DEFAULT 5,
    `penalty_def` INTEGER NOT NULL DEFAULT 5,
    `interceptions` INTEGER NOT NULL DEFAULT 5,
    `head_boatle` INTEGER NOT NULL DEFAULT 5,
    `pass` INTEGER NOT NULL DEFAULT 5,
    `pass_long` INTEGER NOT NULL DEFAULT 5,
    `shot_long` INTEGER NOT NULL DEFAULT 5,
    `vision` INTEGER NOT NULL DEFAULT 5,
    `dribbling` INTEGER NOT NULL DEFAULT 5,
    `shot` INTEGER NOT NULL DEFAULT 5,
    `shot_power` INTEGER NOT NULL DEFAULT 5,
    `speed_sprint` INTEGER NOT NULL DEFAULT 5,
    `position` INTEGER NOT NULL DEFAULT 5,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `games` INTEGER NOT NULL DEFAULT 0,
    `wins` INTEGER NOT NULL DEFAULT 0,
    `draws` INTEGER NOT NULL DEFAULT 0,
    `loses` INTEGER NOT NULL DEFAULT 0,
    `goals` INTEGER NOT NULL DEFAULT 0,
    `power` INTEGER NOT NULL DEFAULT 0,
    `power11` INTEGER NOT NULL DEFAULT 0,
    `points` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Team_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `Team`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
