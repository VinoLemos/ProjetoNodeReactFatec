-- CreateTable
CREATE TABLE `itemNotaFiscal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `produtoId` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `valorUnitario` DECIMAL(12, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ItemNotaFiscalToNotaFiscal` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ItemNotaFiscalToNotaFiscal_AB_unique`(`A`, `B`),
    INDEX `_ItemNotaFiscalToNotaFiscal_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `itemNotaFiscal` ADD CONSTRAINT `itemNotaFiscal_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ItemNotaFiscalToNotaFiscal` ADD CONSTRAINT `_ItemNotaFiscalToNotaFiscal_A_fkey` FOREIGN KEY (`A`) REFERENCES `itemNotaFiscal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ItemNotaFiscalToNotaFiscal` ADD CONSTRAINT `_ItemNotaFiscalToNotaFiscal_B_fkey` FOREIGN KEY (`B`) REFERENCES `notasfiscais`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
