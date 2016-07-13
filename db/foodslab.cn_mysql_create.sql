CREATE TABLE `manager` (
	`managerId` VARCHAR(32) NOT NULL,
	`managerName` VARCHAR(32) NOT NULL,
	`managerPassword` VARCHAR(16) NOT NULL,
	`createTime` DATETIME NOT NULL,
	`updateTime` DATETIME NOT NULL,
	PRIMARY KEY (`managerId`)
);

CREATE TABLE `series` (
	`seriesId` VARCHAR(32) NOT NULL ,
	`seriesLabel` VARCHAR(16) NOT NULL,
	`seriesDesc` VARCHAR(160) NOT NULL,
	`seriesOrder` tinyint(2) NOT NULL,
	`seriesShow` bit(1) NOT NULL,
	`seriesDel` bit(1) NOT NULL,
	`createTime` DATETIME NOT NULL,
	`updateTime` DATETIME NOT NULL,
	PRIMARY KEY (`seriesId`)
);

CREATE TABLE `type` (
	`typeId` VARCHAR(32) NOT NULL,
	`typeLabel` VARCHAR(32) NOT NULL,
	`typeDesc` VARCHAR(320) NOT NULL,
	`typeOrder` tinyint(2) NOT NULL,
	`typeShow` bit(1) NOT NULL,
	`typeDel` bit(1) NOT NULL,
	`seriesId` tinyint(2) NOT NULL,
	`createTime` DATETIME NOT NULL,
	`updateTime` DATETIME NOT NULL,
	PRIMARY KEY (`typeId`)
);

CREATE TABLE `format` (
	`formatId` VARCHAR(32) NOT NULL,
	`formatLabel` VARCHAR(32) NOT NULL,
	`formatDesc` VARCHAR(320) NOT NULL,
	`formatOrder` tinyint(2) NOT NULL,
	`formatShow` bit(1) NOT NULL,
	`formatDel` bit(1) NOT NULL,
	`typeId` tinyint(2) NOT NULL,
	`createTime` DATETIME NOT NULL,
	`updateTime` DATETIME NOT NULL,
	PRIMARY KEY (`formatId`)
);

CREATE TABLE `product` (
	`productId` VARCHAR(32) NOT NULL,
	`seriesId` VARCHAR(32) NOT NULL,
	`seriesLabel` VARCHAR(16) NOT NULL,
	`typeId` VARCHAR(32) NOT NULL,
	`typeLabel` VARCHAR(32) NOT NULL,
	`formatId` VARCHAR(32) NOT NULL,
	`formatLabel` VARCHAR(32) NOT NULL,
	`productDesc` VARCHAR(500) NOT NULL,
	`productMaterial` VARCHAR(3000) NOT NULL,
	`productCrafts` VARCHAR(200) NOT NULL,
	`productCost` double NOT NULL,
	`productDiscount` FLOAT NOT NULL,
	`productPrice` FLOAT NOT NULL,
	PRIMARY KEY (`productId`)
);

CREATE TABLE `order` (
    `orderId` VARCHAR(32) NOT NULL,
    PRIMARY KEY (`orderId`)
);

CREATE TABLE `cart` (
    `cartId` VARCHAR(32) NOT NULL,
    PRIMARY KEY (`cartId`)
);

CREATE TABLE `user` (
	`userId` VARCHAR(32) NOT NULL,
	PRIMARY KEY (`userId`)
);

CREATE TABLE `account` (
	`accountId` VARCHAR(32) NOT NULL,
	`accountNumber` VARCHAR(32) NOT NULL,
	`accountPassword` VARCHAR(16),
	`accountNickName` VARCHAR(32) NOT NULL,
	`accountGender` tinyint(1),
	`accountAddress` VARCHAR(200),
	`accountPortrait` VARCHAR(500),
	`accountBirthday` DATE,
	`accountSource` enum NOT NULL,
	`createTime` DATETIME NOT NULL,
	`updateTime` DATETIME NOT NULL,
	`userId` VARCHAR(32) NOT NULL,
	PRIMARY KEY (`accountId`)
);

ALTER TABLE `type` ADD constraint `type_fk0` FOREIGN KEY (`seriesId`) REFERENCES `series`(`seriesId`);

ALTER TABLE `format` ADD CONSTRAINT `format_fk0` FOREIGN KEY (`typeId`) REFERENCES `type`(`typeId`);

ALTER TABLE `product` ADD CONSTRAINT `product_fk0` FOREIGN KEY (`seriesId`) REFERENCES `series`(`seriesId`);

ALTER TABLE `product` ADD CONSTRAINT `product_fk1` FOREIGN KEY (`seriesLabel`) REFERENCES `series`(`seriesLabel`);

ALTER TABLE `product` ADD CONSTRAINT `product_fk2` FOREIGN KEY (`typeId`) REFERENCES `type`(`typeId`);

ALTER TABLE `product` ADD CONSTRAINT `product_fk3` FOREIGN KEY (`typeLabel`) REFERENCES `type`(`typeLabel`);

ALTER TABLE `product` ADD CONSTRAINT `product_fk4` FOREIGN KEY (`formatId`) REFERENCES `format`(`formatId`);

ALTER TABLE `product` ADD CONSTRAINT `product_fk5` FOREIGN KEY (`formatLabel`) REFERENCES `format`(`formatLabel`);

ALTER TABLE `account` ADD CONSTRAINT `account_fk0` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`);

