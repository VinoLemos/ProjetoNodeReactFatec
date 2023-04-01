/*
  Warnings:

  - You are about to drop the `fornecedors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_fornecedortoproduto` DROP FOREIGN KEY `_FornecedorToProduto_A_fkey`;

-- DropTable
DROP TABLE `fornecedors`;

-- CreateTable
CREATE TABLE `fornecedores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `cnpj` DECIMAL(65, 30) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `fornecedores_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notasfiscais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpfCliente` VARCHAR(20) NOT NULL,
    `dataVenda` DATETIME(3) NOT NULL,
    `enderecoEntregta` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_FornecedorToProduto` ADD CONSTRAINT `_FornecedorToProduto_A_fkey` FOREIGN KEY (`A`) REFERENCES `fornecedores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
