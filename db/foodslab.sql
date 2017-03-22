-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-07-25 14:32:23
-- 服务器版本： 5.6.22
-- PHP Version: 5.5.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foodslab`
--

-- --------------------------------------------------------

--
-- 表的结构 `manager`
--

CREATE TABLE IF NOT EXISTS `manager` (
  `managerId` varchar(32) NOT NULL,
  `managerName` varchar(32) NOT NULL,
  `managerPassword` varchar(16) NOT NULL,
  `managerLevel` int(11) NOT NULL COMMENT '等级',
  `managerOrder` int(11) NOT NULL COMMENT '同一个level下的order',
  `managerStatus` int(11) NOT NULL COMMENT '正常，禁用，删除',
  `managerPId` varchar(32) NOT NULL,
  `createTime` datetime NOT NULL,
  `updateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `manager_menu`
--

CREATE TABLE IF NOT EXISTS `manager_menu` (
  `managerId` varchar(32) NOT NULL,
  `menuId` varchar(32) NOT NULL,
  `menuName` varchar(32) NOT NULL,
  `createTime` int(11) NOT NULL,
  `updateTime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='管理员以及对应能看到的菜单';

-- --------------------------------------------------------

--
-- 表的结构 `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
  `menuId` varchar(32) NOT NULL,
  `menuLabel` varchar(32) NOT NULL,
  `levelId` varchar(36) NOT NULL,
  `levelLabel` int(11) NOT NULL,
  `menuOrder` int(11) NOT NULL,
  `menuCall` text NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `menu`
--

INSERT INTO `menu` (`menuId`, `menuLabel`, `levelId`, `levelLabel`, `menuOrder`, `menuCall`, `createTime`, `updateTime`) VALUES
('08a556c0-6f99-4af0-8c65-ea0ff125', '活动管理', '8e2e3fc7-1968-4f1b-bd4c-07794c5855b5', 11, 1, '', '2016-07-25 14:23:12', '0000-00-00 00:00:00'),
('28aea002-bbf8-41e8-ba74-9bfd9c0a', '消息管理', '8e2e3fc7-1968-4f1b-bd4c-07794c5855b5', 11, 5, '', '2016-07-25 14:23:12', '0000-00-00 00:00:00'),
('3a6a7843-e282-4c90-b70e-3ef826bb', '系统管理', '8e2e3fc7-1968-4f1b-bd4c-07794c5855b5', 11, 0, '', '2016-07-25 14:23:12', '0000-00-00 00:00:00'),
('4c30c3a3-77ae-45e7-9fec-8eb79175', '销售报表', '51bf4162-5270-11e6-8311-1cae145b8cab', 10, 0, '', '2016-07-25 14:11:24', '0000-00-00 00:00:00'),
('4e33ff53-821b-4d99-acc4-c2237757', '流量报表', '51bf4162-5270-11e6-8311-1cae145b8cab', 10, 1, '', '2016-07-25 14:11:40', '0000-00-00 00:00:00'),
('6f6c360f-e855-4e33-b4f2-b499015b', '推荐管理', '8e2e3fc7-1968-4f1b-bd4c-07794c5855b5', 11, 4, '', '2016-07-25 14:23:12', '0000-00-00 00:00:00'),
('7f70fe02-52a2-404f-8d0d-bdf4cc2e', '产品管理', '8e2e3fc7-1968-4f1b-bd4c-07794c5855b5', 11, 2, '', '2016-07-25 14:23:12', '0000-00-00 00:00:00'),
('8c3bbaec-1458-452d-8f2c-751148c3', '用户管理', '8e2e3fc7-1968-4f1b-bd4c-07794c5855b5', 11, 8, '', '2016-07-25 14:23:12', '0000-00-00 00:00:00'),
('999578b1-ffd5-4ca5-bab1-1fc023db', '订单管理', '8e2e3fc7-1968-4f1b-bd4c-07794c5855b5', 11, 9, '', '2016-07-25 14:23:13', '0000-00-00 00:00:00'),
('9f655b23-8f54-4320-a0c5-66de0370', '预约管理', '8e2e3fc7-1968-4f1b-bd4c-07794c5855b5', 11, 10, '', '2016-07-25 14:23:13', '0000-00-00 00:00:00'),
('acab4074-34e5-4950-b377-4a837a0b', '皮肤管理', '8e2e3fc7-1968-4f1b-bd4c-07794c5855b5', 11, 6, '', '2016-07-25 14:23:12', '0000-00-00 00:00:00'),
('e5d9a565-ede9-4665-9bd5-2fb323a6', '链接管理', '8e2e3fc7-1968-4f1b-bd4c-07794c5855b5', 11, 7, '', '2016-07-25 14:23:12', '0000-00-00 00:00:00'),
('e67f0777-14c5-45ec-85d8-dc355780', '预约设定', '8e2e3fc7-1968-4f1b-bd4c-07794c5855b5', 11, 3, '', '2016-07-25 14:23:12', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `meta_level`
--

CREATE TABLE IF NOT EXISTS `meta_level` (
  `levelId` varchar(36) NOT NULL,
  `levelLabel` int(11) NOT NULL,
  `levelDesc` text NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='只读表，预定义了menu的位置，数据可常驻内存。';

--
-- 转存表中的数据 `meta_level`
--

INSERT INTO `meta_level` (`levelId`, `levelLabel`, `levelDesc`, `createTime`, `updateTime`) VALUES
('51bf4162-5270-11e6-8311-1cae145b8cab', 10, '该数据描述了在如下约束下的菜单位置在后台管理界面的顶部。', '2016-07-25 14:07:37', '0000-00-00 00:00:00'),
('8e2e3fc7-1968-4f1b-bd4c-07794c5855b5', 11, '该数据描述了在如下约束下的菜单位置在后台管理界面的左部。', '2016-07-25 14:20:37', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `meta_unit`
--

CREATE TABLE IF NOT EXISTS `meta_unit` (
  `unitId` varchar(36) NOT NULL,
  `unitLabel` varchar(16) NOT NULL,
  `unitName` varchar(36) NOT NULL,
  `unitOrder` int(11) NOT NULL,
  `unitDesc` text,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='只读表，预定义一些常用单位符号，数据可常驻内存。';

--
-- 转存表中的数据 `meta_unit`
--

INSERT INTO `meta_unit` (`unitId`, `unitLabel`, `unitName`, `unitOrder`, `unitDesc`, `createTime`, `updateTime`) VALUES
('29472597-434e-4211-b3f1-0c00a01926cf', 'ml', '毫升', 0, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('3fcc6eba-526d-11e6-8311-1cae145b8cab', 'Kg', '千克', 3, '', '2016-07-25 13:39:45', '0000-00-00 00:00:00'),
('53a5dd82-526c-11e6-8311-1cae145b8cab', 'L', '升', 1, '', '2016-07-25 13:37:00', '0000-00-00 00:00:00'),
('53a5eac0-526c-11e6-8311-1cae145b8cab', 'g', '克', 2, '', '2016-07-25 13:37:09', '0000-00-00 00:00:00'),
('726a6796-526d-11e6-8311-1cae145b8cab', '￥', '元（人民币）', 4, '', '2016-07-25 13:41:38', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `product_format`
--

CREATE TABLE IF NOT EXISTS `product_format` (
  `formatId` varchar(32) NOT NULL,
  `formatLabel` varchar(32) NOT NULL,
  `formatMeta` varchar(16) NOT NULL,
  `amount` int(11) NOT NULL COMMENT '该规格下的产品数量',
  `amountMeta` varchar(16) NOT NULL,
  `pricing` int(11) NOT NULL COMMENT '额定定价',
  `pricingMeta` varchar(16) NOT NULL COMMENT '数量单位',
  `postage` int(11) NOT NULL COMMENT '邮费',
  `postageMeta` varchar(16) NOT NULL COMMENT '邮费单位',
  `price` float NOT NULL COMMENT '现价',
  `priceDiscount` float NOT NULL COMMENT '折扣',
  `priceStart` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '折扣和价格的开始时间',
  `priceEnd` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '折扣和价格的结束时间',
  `priceStatus` bit(1) NOT NULL COMMENT '折扣和价格的状态',
  `expressCount` int(11) NOT NULL COMMENT '包邮数量',
  `expressName` varchar(32) NOT NULL COMMENT '包邮快递公司名称',
  `expressStart` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '包邮开始时间',
  `expressEnd` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '包邮结束时间',
  `expressStatus` bit(1) NOT NULL COMMENT '包邮的状态',
  `getCount` int(11) NOT NULL COMMENT '满?赠',
  `getLabel` varchar(32) NOT NULL COMMENT '满赠产品名称',
  `getId` int(11) NOT NULL COMMENT '满赠产品的ID',
  `getStart` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '满赠开始时间',
  `getEnd` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '满赠结束时间',
  `getStatus` bit(1) NOT NULL COMMENT '满赠的状态',
  `formatOrder` tinyint(2) NOT NULL,
  `formatStatus` bit(1) NOT NULL COMMENT '数据状态',
  `typeId` tinyint(2) NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updateTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `product_series`
--

CREATE TABLE IF NOT EXISTS `product_series` (
  `seriesId` varchar(32) NOT NULL,
  `seriesLabel` varchar(16) NOT NULL,
  `seriesDesc` varchar(160) NOT NULL,
  `seriesOrder` tinyint(2) NOT NULL,
  `seriesStatus` bit(1) NOT NULL,
  `createTime` datetime NOT NULL,
  `updateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `product_type`
--

CREATE TABLE IF NOT EXISTS `product_type` (
  `typeId` varchar(32) NOT NULL,
  `typeLabel` varchar(32) NOT NULL,
  `typeDesc` varchar(500) NOT NULL,
  `typeOrder` tinyint(2) NOT NULL,
  `typeStatus` bit(1) NOT NULL,
  `seriesId` tinyint(2) NOT NULL,
  `createTime` datetime NOT NULL,
  `updateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `shoping_cart`
--

CREATE TABLE IF NOT EXISTS `shoping_cart` (
  `cartId` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `shoping_order`
--

CREATE TABLE IF NOT EXISTS `shoping_order` (
  `orderId` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `shoping_order`
--

INSERT INTO `shoping_order` (`orderId`) VALUES
('createTime'),
('orderStatus');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `userId` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `user_account`
--

CREATE TABLE IF NOT EXISTS `user_account` (
  `accountId` varchar(32) NOT NULL,
  `accountNumber` varchar(32) NOT NULL,
  `accountPassword` varchar(16) DEFAULT NULL,
  `accountNickName` varchar(32) NOT NULL,
  `accountGender` tinyint(1) DEFAULT NULL,
  `accountAddress` varchar(200) DEFAULT NULL,
  `accountPortrait` varchar(500) DEFAULT NULL,
  `accountBirthday` date DEFAULT NULL,
  `accountSource` tinyint(1) DEFAULT NULL,
  `createTime` datetime NOT NULL,
  `updateTime` datetime NOT NULL,
  `userId` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `user_address`
--

CREATE TABLE IF NOT EXISTS `user_address` (
  `addressId` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`managerId`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`menuId`);

--
-- Indexes for table `meta_level`
--
ALTER TABLE `meta_level`
  ADD PRIMARY KEY (`levelId`),
  ADD UNIQUE KEY `levelLabel` (`levelLabel`),
  ADD UNIQUE KEY `levelId` (`levelId`);

--
-- Indexes for table `meta_unit`
--
ALTER TABLE `meta_unit`
  ADD PRIMARY KEY (`unitId`);

--
-- Indexes for table `product_format`
--
ALTER TABLE `product_format`
  ADD PRIMARY KEY (`formatId`);

--
-- Indexes for table `product_series`
--
ALTER TABLE `product_series`
  ADD PRIMARY KEY (`seriesId`);

--
-- Indexes for table `product_type`
--
ALTER TABLE `product_type`
  ADD PRIMARY KEY (`typeId`);

--
-- Indexes for table `shoping_cart`
--
ALTER TABLE `shoping_cart`
  ADD PRIMARY KEY (`cartId`);

--
-- Indexes for table `shoping_order`
--
ALTER TABLE `shoping_order`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `user_account`
--
ALTER TABLE `user_account`
  ADD PRIMARY KEY (`accountId`);

--
-- Indexes for table `user_address`
--
ALTER TABLE `user_address`
  ADD PRIMARY KEY (`addressId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
