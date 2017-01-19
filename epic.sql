-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2017 at 05:11 AM
-- Server version: 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `epic`
--

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

CREATE TABLE IF NOT EXISTS `property` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `pcode` varchar(50) NOT NULL,
  `sno` varchar(50) DEFAULT NULL,
  `description` varchar(999) NOT NULL,
  `brand` varchar(99) DEFAULT NULL,
  `model` varchar(99) DEFAULT NULL,
  `uom` varchar(20) DEFAULT NULL,
  `cost` double(13,2) NOT NULL,
  `date_acquired` datetime NOT NULL,
  `or_number` varchar(999) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`id`, `pcode`, `sno`, `description`, `brand`, `model`, `uom`, `cost`, `date_acquired`, `or_number`) VALUES
(1, '008-CE11-2007-019', '53A241310155856', 'item1', 'GREE', 'GR8070', '', 10.00, '0000-00-00 00:00:00', '123456789'),
(2, '008-LIGtrap-2016-002', '002INSE5W102', '"MOTHERBOARD: Not AvailableOS:Microsoft Windows Server 2003MEMORY: 3070 RAMHDD: Not AvailableMOUSE: PS2 A4TECHKEYBOARD: PS2 A4TECHPROCESSOR: Intel ? ON ? CPU 5110 @ 1.60 GHz; 320gb (2 CPUs)CDROM: NONEDVDROM: BUILT-INDVDROM: BUILT-IN ""GENESIS"""', 'LG', 'LG143', '', 20.00, '0000-00-00 00:00:00', '321654987'),
(3, 'CLN-SFF77-2014-002', '3LBLL358793', 'item3', 'Samsung', 'GTS5282', '', 30.00, '0000-00-00 00:00:00', '147852369'),
(4, '008-SFF14-001', '006-041-1007', 'item4', 'Lenovo', 'LL1717', '', 40.00, '0000-00-00 00:00:00', '963258741'),
(5, 'CLN-SFF23-2013-291', '8.18E+12', 'item5', 'Cherry Mobile', 'CM14354', '', 50.00, '0000-00-00 00:00:00', '258741369'),
(6, '008-CE11-2007-0119', '8.17673E+13', 'item6', 'OPPO', 'PPAP123', '', 60.00, '0000-00-00 00:00:00', '753159468'),
(7, '008-CE11-2007-0112', '8.17673E+14', 'item7', 'Firefly', 'FF17', '', 70.00, '0000-00-00 00:00:00', '753258412'),
(8, '008-CE11-2007-0113', '8.17673E+14', 'item8', 'Star Mobile', 'SMSM67', '', 80.00, '0000-00-00 00:00:00', '976421388'),
(9, '008-CE11-2007-0763', '8.17673E+14', 'item9', 'HTC', 'HTC234', '', 90.00, '0000-00-00 00:00:00', '211515155'),
(10, '008-CE11-2007-0898', '8.17673E+14', 'item10', 'MI', 'MI908', '', 100.00, '0000-00-00 00:00:00', '987456974'),
(11, '008-12312-12312-213', '1231231', 'Computer ko', 'Asus', 'Motherboard', '', 123.00, '0000-00-00 00:00:00', '9876543');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
