# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.5.29)
# Database: ss_saltedherring
# Generation Time: 2013-10-18 01:45:54 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table AboutPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `AboutPage`;

CREATE TABLE `AboutPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `IntroText` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `AboutPage` WRITE;
/*!40000 ALTER TABLE `AboutPage` DISABLE KEYS */;

INSERT INTO `AboutPage` (`ID`, `IntroText`)
VALUES
	(6,NULL);

/*!40000 ALTER TABLE `AboutPage` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table AboutPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `AboutPage_Live`;

CREATE TABLE `AboutPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `IntroText` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table AboutPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `AboutPage_versions`;

CREATE TABLE `AboutPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `IntroText` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Award
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Award`;

CREATE TABLE `Award` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `LogoID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `LogoID` (`LogoID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table BaseDBO
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BaseDBO`;

CREATE TABLE `BaseDBO` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Category','Client','Colour','Project','Service','Slider','TeamMember','BaseDBO','Award','NewsItem') CHARACTER SET utf8 DEFAULT 'Category',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `URLSegment` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `SortOrder` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `BaseDBO` WRITE;
/*!40000 ALTER TABLE `BaseDBO` DISABLE KEYS */;

INSERT INTO `BaseDBO` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `URLSegment`, `SortOrder`, `Version`)
VALUES
	(1,'Project','2013-10-12 12:54:40','2013-10-12 13:03:25','Splore','splore',-1,2),
	(2,'Colour','2013-10-12 12:55:30','2013-10-12 12:55:30',NULL,'pink',-1,1),
	(3,'Category','2013-10-12 12:57:58','2013-10-12 12:57:58',NULL,'brand-and-identity',-6,1),
	(4,'Category','2013-10-12 12:58:26','2013-10-12 12:58:26',NULL,'strategy',-5,1),
	(5,'Category','2013-10-12 12:58:36','2013-10-12 12:58:36',NULL,'websites',-4,1),
	(6,'Category','2013-10-12 12:59:12','2013-10-12 12:59:12',NULL,'campaigns-and-microsites',-3,1),
	(7,'Category','2013-10-12 12:59:29','2013-10-12 12:59:29',NULL,'content-creation',-2,1),
	(8,'Category','2013-10-12 12:59:48','2013-10-12 12:59:48',NULL,'apps-and-interface-design',-1,1),
	(9,'Service','2013-10-12 13:01:10','2013-10-12 13:01:10',NULL,'concept',-1,1),
	(10,'Service','2013-10-12 13:01:22','2013-10-12 13:01:22',NULL,'design',-2,1),
	(11,'Service','2013-10-12 13:01:43','2013-10-12 13:01:43',NULL,'development',-3,1),
	(12,'Service','2013-10-12 13:01:56','2013-10-12 13:01:56',NULL,'art-direction',-4,1),
	(13,'Service','2013-10-12 13:02:08','2013-10-12 13:02:08',NULL,'silverstripe',-5,1),
	(14,'Client','2013-10-12 13:02:21','2013-10-12 13:02:21',NULL,'splore-2',-1,1),
	(15,'Slider','2013-10-12 16:29:09','2013-10-12 17:39:42','Whittakers\' Chocolate','whittakers-chocolate',-1,2),
	(16,'Slider','2013-10-12 16:41:17','2013-10-12 17:05:02','Splore Festival','splore-festival',-2,12),
	(17,'TeamMember','2013-10-13 18:00:36','2013-10-13 21:27:15',NULL,'pep-zuijderwijk',-1,0);

/*!40000 ALTER TABLE `BaseDBO` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table BaseMedia
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BaseMedia`;

CREATE TABLE `BaseMedia` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('ImageMedia','SliderImage','BaseMedia','MediaWithFallback','SWFMedia','VimeoMedia') CHARACTER SET utf8 DEFAULT 'ImageMedia',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `SortOrder` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `ProjectID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ProjectID` (`ProjectID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `BaseMedia` WRITE;
/*!40000 ALTER TABLE `BaseMedia` DISABLE KEYS */;

INSERT INTO `BaseMedia` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `SortOrder`, `Version`, `ProjectID`)
VALUES
	(1,'ImageMedia','2013-10-12 13:32:02','2013-10-12 13:32:19',NULL,-2,5,1),
	(2,'ImageMedia','2013-10-12 13:32:40','2013-10-12 13:32:53','2',-1,5,1),
	(3,'SliderImage','2013-10-12 16:29:26','2013-10-12 16:29:38','Image 1',-1,5,0),
	(4,'SliderImage','2013-10-12 16:41:30','2013-10-12 16:41:44','Image 1',-2,5,0);

/*!40000 ALTER TABLE `BaseMedia` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Category`;

CREATE TABLE `Category` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;

INSERT INTO `Category` (`ID`, `Name`)
VALUES
	(3,'brand & Identity'),
	(4,'strategy'),
	(5,'websites'),
	(6,'campaigns & microsites'),
	(7,'content creation'),
	(8,'apps & interface design');

/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Client
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Client`;

CREATE TABLE `Client` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Client` WRITE;
/*!40000 ALTER TABLE `Client` DISABLE KEYS */;

INSERT INTO `Client` (`ID`, `Name`)
VALUES
	(14,'Splore');

/*!40000 ALTER TABLE `Client` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Colour
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Colour`;

CREATE TABLE `Colour` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(25) CHARACTER SET utf8 DEFAULT NULL,
  `Value` varchar(25) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Colour` WRITE;
/*!40000 ALTER TABLE `Colour` DISABLE KEYS */;

INSERT INTO `Colour` (`ID`, `Name`, `Value`)
VALUES
	(2,'Pink','e856d2');

/*!40000 ALTER TABLE `Colour` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table CustomMenuHolder
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CustomMenuHolder`;

CREATE TABLE `CustomMenuHolder` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('CustomMenuHolder') CHARACTER SET utf8 DEFAULT 'CustomMenuHolder',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` mediumtext CHARACTER SET utf8,
  `Slug` mediumtext CHARACTER SET utf8,
  `Order` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `CustomMenuHolder` WRITE;
/*!40000 ALTER TABLE `CustomMenuHolder` DISABLE KEYS */;

INSERT INTO `CustomMenuHolder` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `Slug`, `Order`)
VALUES
	(1,'CustomMenuHolder','2013-10-11 23:56:42','2013-10-11 23:56:42','Main Menu','main-menu',NULL),
	(2,'CustomMenuHolder','2013-10-11 23:56:42','2013-10-11 23:56:42','Header Menu','header-menu',NULL),
	(3,'CustomMenuHolder','2013-10-11 23:56:42','2013-10-11 23:56:42','Footer Menu','footer-menu',NULL);

/*!40000 ALTER TABLE `CustomMenuHolder` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table CustomMenuHolder_Pages
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CustomMenuHolder_Pages`;

CREATE TABLE `CustomMenuHolder_Pages` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CustomMenuHolderID` int(11) NOT NULL DEFAULT '0',
  `SiteTreeID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `CustomMenuHolderID` (`CustomMenuHolderID`),
  KEY `SiteTreeID` (`SiteTreeID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Email_BounceRecord
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Email_BounceRecord`;

CREATE TABLE `Email_BounceRecord` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Email_BounceRecord') CHARACTER SET utf8 DEFAULT 'Email_BounceRecord',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `BounceEmail` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `BounceTime` datetime DEFAULT NULL,
  `BounceMessage` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `MemberID` (`MemberID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table ErrorPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ErrorPage`;

CREATE TABLE `ErrorPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ErrorCode` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `ErrorPage` WRITE;
/*!40000 ALTER TABLE `ErrorPage` DISABLE KEYS */;

INSERT INTO `ErrorPage` (`ID`, `ErrorCode`)
VALUES
	(4,404),
	(5,500);

/*!40000 ALTER TABLE `ErrorPage` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ErrorPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ErrorPage_Live`;

CREATE TABLE `ErrorPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ErrorCode` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `ErrorPage_Live` WRITE;
/*!40000 ALTER TABLE `ErrorPage_Live` DISABLE KEYS */;

INSERT INTO `ErrorPage_Live` (`ID`, `ErrorCode`)
VALUES
	(4,404),
	(5,500);

/*!40000 ALTER TABLE `ErrorPage_Live` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ErrorPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ErrorPage_versions`;

CREATE TABLE `ErrorPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `ErrorCode` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `ErrorPage_versions` WRITE;
/*!40000 ALTER TABLE `ErrorPage_versions` DISABLE KEYS */;

INSERT INTO `ErrorPage_versions` (`ID`, `RecordID`, `Version`, `ErrorCode`)
VALUES
	(1,4,1,404),
	(2,5,1,500);

/*!40000 ALTER TABLE `ErrorPage_versions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table FacebookPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `FacebookPage`;

CREATE TABLE `FacebookPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `FacebookTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookAppId` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookAppSecret` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookCanvasURL` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookPageTabURL` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookPermissions` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookNameSpace` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `OGTitle` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `OGDescription` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `OGImageUrl` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table FacebookPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `FacebookPage_Live`;

CREATE TABLE `FacebookPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `FacebookTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookAppId` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookAppSecret` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookCanvasURL` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookPageTabURL` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookPermissions` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookNameSpace` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `OGTitle` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `OGDescription` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `OGImageUrl` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table FacebookPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `FacebookPage_versions`;

CREATE TABLE `FacebookPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `FacebookTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookAppId` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookAppSecret` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookCanvasURL` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookPageTabURL` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookPermissions` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `FacebookNameSpace` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `OGTitle` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `OGDescription` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `OGImageUrl` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table File
# ------------------------------------------------------------

DROP TABLE IF EXISTS `File`;

CREATE TABLE `File` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Folder','Image','File','Image_Cached') CHARACTER SET utf8 DEFAULT 'Folder',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Filename` mediumtext CHARACTER SET utf8,
  `Content` mediumtext CHARACTER SET utf8,
  `ShowInSearch` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  `OwnerID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `OwnerID` (`OwnerID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `File` WRITE;
/*!40000 ALTER TABLE `File` DISABLE KEYS */;

INSERT INTO `File` (`ID`, `ClassName`, `Created`, `LastEdited`, `Name`, `Title`, `Filename`, `Content`, `ShowInSearch`, `ParentID`, `OwnerID`)
VALUES
	(1,'Folder','2013-10-12 13:32:16','2013-10-12 13:32:16','Uploads','Uploads','assets/Uploads/',NULL,1,0,1),
	(2,'Image','2013-10-12 13:32:16','2013-10-12 13:32:16','928x687.gif','928x687','assets/Uploads/928x687.gif',NULL,1,1,1);

/*!40000 ALTER TABLE `File` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Group
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Group`;

CREATE TABLE `Group` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Group') CHARACTER SET utf8 DEFAULT 'Group',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Description` mediumtext CHARACTER SET utf8,
  `Code` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Locked` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `HtmlEditorConfig` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Group` WRITE;
/*!40000 ALTER TABLE `Group` DISABLE KEYS */;

INSERT INTO `Group` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `Description`, `Code`, `Locked`, `Sort`, `HtmlEditorConfig`, `ParentID`)
VALUES
	(1,'Group','2013-10-11 23:53:49','2013-10-11 23:53:49','Content Authors',NULL,'content-authors',0,1,NULL,0),
	(2,'Group','2013-10-11 23:53:49','2013-10-11 23:53:49','Administrators',NULL,'administrators',0,0,NULL,0);

/*!40000 ALTER TABLE `Group` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Group_Members
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Group_Members`;

CREATE TABLE `Group_Members` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `GroupID` int(11) NOT NULL DEFAULT '0',
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `GroupID` (`GroupID`),
  KEY `MemberID` (`MemberID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Group_Members` WRITE;
/*!40000 ALTER TABLE `Group_Members` DISABLE KEYS */;

INSERT INTO `Group_Members` (`ID`, `GroupID`, `MemberID`)
VALUES
	(1,2,1);

/*!40000 ALTER TABLE `Group_Members` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Group_Roles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Group_Roles`;

CREATE TABLE `Group_Roles` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `GroupID` int(11) NOT NULL DEFAULT '0',
  `PermissionRoleID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `GroupID` (`GroupID`),
  KEY `PermissionRoleID` (`PermissionRoleID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table ImageMedia
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ImageMedia`;

CREATE TABLE `ImageMedia` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ImageID` int(11) NOT NULL DEFAULT '0',
  `TeamMemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ImageID` (`ImageID`),
  KEY `TeamMemberID` (`TeamMemberID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `ImageMedia` WRITE;
/*!40000 ALTER TABLE `ImageMedia` DISABLE KEYS */;

INSERT INTO `ImageMedia` (`ID`, `ImageID`, `TeamMemberID`)
VALUES
	(1,2,0),
	(2,2,0),
	(3,2,0),
	(4,2,0);

/*!40000 ALTER TABLE `ImageMedia` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table LoginAttempt
# ------------------------------------------------------------

DROP TABLE IF EXISTS `LoginAttempt`;

CREATE TABLE `LoginAttempt` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('LoginAttempt') CHARACTER SET utf8 DEFAULT 'LoginAttempt',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Email` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Status` enum('Success','Failure') CHARACTER SET utf8 DEFAULT 'Success',
  `IP` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `MemberID` (`MemberID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table MediaWithFallback
# ------------------------------------------------------------

DROP TABLE IF EXISTS `MediaWithFallback`;

CREATE TABLE `MediaWithFallback` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PosterImageID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `PosterImageID` (`PosterImageID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Member
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Member`;

CREATE TABLE `Member` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Member') CHARACTER SET utf8 DEFAULT 'Member',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `FirstName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Surname` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Email` varchar(256) CHARACTER SET utf8 DEFAULT NULL,
  `Password` varchar(160) CHARACTER SET utf8 DEFAULT NULL,
  `RememberLoginToken` varchar(160) CHARACTER SET utf8 DEFAULT NULL,
  `NumVisit` int(11) NOT NULL DEFAULT '0',
  `LastVisited` datetime DEFAULT NULL,
  `Bounced` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `AutoLoginHash` varchar(160) CHARACTER SET utf8 DEFAULT NULL,
  `AutoLoginExpired` datetime DEFAULT NULL,
  `PasswordEncryption` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Salt` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `PasswordExpiry` date DEFAULT NULL,
  `LockedOutUntil` datetime DEFAULT NULL,
  `Locale` varchar(6) CHARACTER SET utf8 DEFAULT NULL,
  `FailedLoginCount` int(11) NOT NULL DEFAULT '0',
  `DateFormat` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `TimeFormat` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Email` (`Email`(255)),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Member` WRITE;
/*!40000 ALTER TABLE `Member` DISABLE KEYS */;

INSERT INTO `Member` (`ID`, `ClassName`, `Created`, `LastEdited`, `FirstName`, `Surname`, `Email`, `Password`, `RememberLoginToken`, `NumVisit`, `LastVisited`, `Bounced`, `AutoLoginHash`, `AutoLoginExpired`, `PasswordEncryption`, `Salt`, `PasswordExpiry`, `LockedOutUntil`, `Locale`, `FailedLoginCount`, `DateFormat`, `TimeFormat`)
VALUES
	(1,'Member','2013-10-11 23:53:49','2013-10-11 23:55:58','Default Admin',NULL,NULL,NULL,'035ae6a7cda1ba06b33a11f7214558256bb2ff70',1,'2013-10-16 22:57:31',0,NULL,NULL,NULL,NULL,NULL,NULL,'en_GB',0,NULL,NULL);

/*!40000 ALTER TABLE `Member` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table MemberPassword
# ------------------------------------------------------------

DROP TABLE IF EXISTS `MemberPassword`;

CREATE TABLE `MemberPassword` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('MemberPassword') CHARACTER SET utf8 DEFAULT 'MemberPassword',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Password` varchar(160) CHARACTER SET utf8 DEFAULT NULL,
  `Salt` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `PasswordEncryption` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `MemberID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `MemberID` (`MemberID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table NewsItem
# ------------------------------------------------------------

DROP TABLE IF EXISTS `NewsItem`;

CREATE TABLE `NewsItem` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Text` mediumtext CHARACTER SET utf8,
  `HomePageID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `HomePageID` (`HomePageID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table OG
# ------------------------------------------------------------

DROP TABLE IF EXISTS `OG`;

CREATE TABLE `OG` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('OG') CHARACTER SET utf8 DEFAULT 'OG',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `OGTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `OGDescription` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `OGImageID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `OGImageID` (`OGImageID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Page
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Page`;

CREATE TABLE `Page` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `OGID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `OGID` (`OGID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Page` WRITE;
/*!40000 ALTER TABLE `Page` DISABLE KEYS */;

INSERT INTO `Page` (`ID`, `OGID`)
VALUES
	(1,0),
	(4,0),
	(5,0),
	(6,0),
	(7,0),
	(8,0);

/*!40000 ALTER TABLE `Page` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Page_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Page_Live`;

CREATE TABLE `Page_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `OGID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `OGID` (`OGID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Page_Live` WRITE;
/*!40000 ALTER TABLE `Page_Live` DISABLE KEYS */;

INSERT INTO `Page_Live` (`ID`, `OGID`)
VALUES
	(1,0),
	(4,0),
	(5,0),
	(6,0),
	(7,0),
	(8,0);

/*!40000 ALTER TABLE `Page_Live` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Page_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Page_versions`;

CREATE TABLE `Page_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `OGID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `OGID` (`OGID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Page_versions` WRITE;
/*!40000 ALTER TABLE `Page_versions` DISABLE KEYS */;

INSERT INTO `Page_versions` (`ID`, `RecordID`, `Version`, `OGID`)
VALUES
	(1,1,1,0),
	(2,2,1,0),
	(3,3,1,0),
	(4,4,1,0),
	(5,5,1,0),
	(6,6,1,0),
	(7,6,2,0),
	(8,6,3,0),
	(9,7,1,0),
	(10,7,2,0),
	(11,1,2,0),
	(12,8,1,0),
	(13,8,2,0),
	(14,1,3,0);

/*!40000 ALTER TABLE `Page_versions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Permission
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Permission`;

CREATE TABLE `Permission` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('Permission') CHARACTER SET utf8 DEFAULT 'Permission',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Code` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Arg` int(11) NOT NULL DEFAULT '0',
  `Type` int(11) NOT NULL DEFAULT '1',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `GroupID` (`GroupID`),
  KEY `Code` (`Code`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Permission` WRITE;
/*!40000 ALTER TABLE `Permission` DISABLE KEYS */;

INSERT INTO `Permission` (`ID`, `ClassName`, `Created`, `LastEdited`, `Code`, `Arg`, `Type`, `GroupID`)
VALUES
	(1,'Permission','2013-10-11 23:53:49','2013-10-11 23:53:49','CMS_ACCESS_CMSMain',0,1,1),
	(2,'Permission','2013-10-11 23:53:49','2013-10-11 23:53:49','CMS_ACCESS_AssetAdmin',0,1,1),
	(3,'Permission','2013-10-11 23:53:49','2013-10-11 23:53:49','CMS_ACCESS_ReportAdmin',0,1,1),
	(4,'Permission','2013-10-11 23:53:49','2013-10-11 23:53:49','SITETREE_REORGANISE',0,1,1),
	(5,'Permission','2013-10-11 23:53:49','2013-10-11 23:53:49','ADMIN',0,1,2);

/*!40000 ALTER TABLE `Permission` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table PermissionRole
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PermissionRole`;

CREATE TABLE `PermissionRole` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('PermissionRole') CHARACTER SET utf8 DEFAULT 'PermissionRole',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `OnlyAdminCanApply` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table PermissionRoleCode
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PermissionRoleCode`;

CREATE TABLE `PermissionRoleCode` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('PermissionRoleCode') CHARACTER SET utf8 DEFAULT 'PermissionRoleCode',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Code` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `RoleID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `RoleID` (`RoleID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Project
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Project`;

CREATE TABLE `Project` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TagLine` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Quote` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Citation` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ProjectInfo` mediumtext CHARACTER SET utf8,
  `SiteURL` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ClientID` int(11) NOT NULL DEFAULT '0',
  `ColourID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ClientID` (`ClientID`),
  KEY `ColourID` (`ColourID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Project` WRITE;
/*!40000 ALTER TABLE `Project` DISABLE KEYS */;

INSERT INTO `Project` (`ID`, `TagLine`, `Quote`, `Citation`, `ProjectInfo`, `SiteURL`, `ClientID`, `ColourID`)
VALUES
	(1,'festival of things','Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. D','Dolor Risus Adipiscing Cras Amet','<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.</p>\n<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.</p>','http://www.splore.net',14,2);

/*!40000 ALTER TABLE `Project` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Project_Categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Project_Categories`;

CREATE TABLE `Project_Categories` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ProjectID` int(11) NOT NULL DEFAULT '0',
  `CategoryID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ProjectID` (`ProjectID`),
  KEY `CategoryID` (`CategoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Project_Categories` WRITE;
/*!40000 ALTER TABLE `Project_Categories` DISABLE KEYS */;

INSERT INTO `Project_Categories` (`ID`, `ProjectID`, `CategoryID`)
VALUES
	(1,1,5);

/*!40000 ALTER TABLE `Project_Categories` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Project_Services
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Project_Services`;

CREATE TABLE `Project_Services` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ProjectID` int(11) NOT NULL DEFAULT '0',
  `ServiceID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ProjectID` (`ProjectID`),
  KEY `ServiceID` (`ServiceID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Project_Services` WRITE;
/*!40000 ALTER TABLE `Project_Services` DISABLE KEYS */;

INSERT INTO `Project_Services` (`ID`, `ProjectID`, `ServiceID`)
VALUES
	(1,1,9),
	(2,1,10),
	(3,1,11),
	(4,1,13);

/*!40000 ALTER TABLE `Project_Services` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ProjectAward
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ProjectAward`;

CREATE TABLE `ProjectAward` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('ProjectAward') CHARACTER SET utf8 DEFAULT 'ProjectAward',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `URL` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ProjectID` int(11) NOT NULL DEFAULT '0',
  `AwardID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ProjectID` (`ProjectID`),
  KEY `AwardID` (`AwardID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table RedirectorPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RedirectorPage`;

CREATE TABLE `RedirectorPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RedirectionType` enum('Internal','External') CHARACTER SET utf8 DEFAULT 'Internal',
  `ExternalURL` varchar(2083) CHARACTER SET utf8 DEFAULT NULL,
  `LinkToID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `LinkToID` (`LinkToID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table RedirectorPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RedirectorPage_Live`;

CREATE TABLE `RedirectorPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RedirectionType` enum('Internal','External') CHARACTER SET utf8 DEFAULT 'Internal',
  `ExternalURL` varchar(2083) CHARACTER SET utf8 DEFAULT NULL,
  `LinkToID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `LinkToID` (`LinkToID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table RedirectorPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RedirectorPage_versions`;

CREATE TABLE `RedirectorPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `RedirectionType` enum('Internal','External') CHARACTER SET utf8 DEFAULT 'Internal',
  `ExternalURL` varchar(2083) CHARACTER SET utf8 DEFAULT NULL,
  `LinkToID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `LinkToID` (`LinkToID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table ReportsData
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ReportsData`;

CREATE TABLE `ReportsData` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('ReportsData') CHARACTER SET utf8 DEFAULT 'ReportsData',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Sql` mediumtext CHARACTER SET utf8,
  `ReportsPageID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ReportsPageID` (`ReportsPageID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table ReportsPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ReportsPage`;

CREATE TABLE `ReportsPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `HtmlContent` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table ReportsPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ReportsPage_Live`;

CREATE TABLE `ReportsPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `HtmlContent` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table ReportsPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ReportsPage_versions`;

CREATE TABLE `ReportsPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `HtmlContent` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Service
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Service`;

CREATE TABLE `Service` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Service` WRITE;
/*!40000 ALTER TABLE `Service` DISABLE KEYS */;

INSERT INTO `Service` (`ID`, `Name`)
VALUES
	(9,'concept'),
	(10,'design'),
	(11,'development'),
	(12,'art direction'),
	(13,'silverstripe');

/*!40000 ALTER TABLE `Service` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SiteConfig
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteConfig`;

CREATE TABLE `SiteConfig` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('SiteConfig') CHARACTER SET utf8 DEFAULT 'SiteConfig',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Tagline` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Theme` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `CanViewType` enum('Anyone','LoggedInUsers','OnlyTheseUsers') CHARACTER SET utf8 DEFAULT 'Anyone',
  `CanEditType` enum('LoggedInUsers','OnlyTheseUsers') CHARACTER SET utf8 DEFAULT 'LoggedInUsers',
  `CanCreateTopLevelType` enum('LoggedInUsers','OnlyTheseUsers') CHARACTER SET utf8 DEFAULT 'LoggedInUsers',
  `GoogleSiteVerificationCode` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `GoogleAnalyticsCode` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `OGID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `OGID` (`OGID`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SiteConfig` WRITE;
/*!40000 ALTER TABLE `SiteConfig` DISABLE KEYS */;

INSERT INTO `SiteConfig` (`ID`, `ClassName`, `Created`, `LastEdited`, `Title`, `Tagline`, `Theme`, `CanViewType`, `CanEditType`, `CanCreateTopLevelType`, `GoogleSiteVerificationCode`, `GoogleAnalyticsCode`, `OGID`)
VALUES
	(1,'SiteConfig','2013-10-11 23:53:49','2013-10-11 23:56:14','Your Site Name','your tagline here','default','Anyone','LoggedInUsers','LoggedInUsers',NULL,NULL,0);

/*!40000 ALTER TABLE `SiteConfig` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SiteConfig_CreateTopLevelGroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteConfig_CreateTopLevelGroups`;

CREATE TABLE `SiteConfig_CreateTopLevelGroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteConfigID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SiteConfigID` (`SiteConfigID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteConfig_EditorGroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteConfig_EditorGroups`;

CREATE TABLE `SiteConfig_EditorGroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteConfigID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SiteConfigID` (`SiteConfigID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteConfig_ViewerGroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteConfig_ViewerGroups`;

CREATE TABLE `SiteConfig_ViewerGroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteConfigID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SiteConfigID` (`SiteConfigID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteTree
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree`;

CREATE TABLE `SiteTree` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('ErrorPage','AboutPage','WorkPage','HomePage','TeamPage','SiteTree','Page','RedirectorPage','VirtualPage','FacebookPage','ReportsPage') CHARACTER SET utf8 DEFAULT 'ErrorPage',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `URLSegment` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `MenuTitle` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Content` mediumtext CHARACTER SET utf8,
  `MetaTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `MetaDescription` mediumtext CHARACTER SET utf8,
  `MetaKeywords` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `ExtraMeta` mediumtext CHARACTER SET utf8,
  `ShowInMenus` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ShowInSearch` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `HasBrokenFile` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `HasBrokenLink` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ReportClass` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `CanViewType` enum('Anyone','LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `CanEditType` enum('LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `Priority` varchar(5) CHARACTER SET utf8 DEFAULT NULL,
  `Version` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `URLSegment` (`URLSegment`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SiteTree` WRITE;
/*!40000 ALTER TABLE `SiteTree` DISABLE KEYS */;

INSERT INTO `SiteTree` (`ID`, `ClassName`, `Created`, `LastEdited`, `URLSegment`, `Title`, `MenuTitle`, `Content`, `MetaTitle`, `MetaDescription`, `MetaKeywords`, `ExtraMeta`, `ShowInMenus`, `ShowInSearch`, `Sort`, `HasBrokenFile`, `HasBrokenLink`, `ReportClass`, `CanViewType`, `CanEditType`, `Priority`, `Version`, `ParentID`)
VALUES
	(1,'HomePage','2013-10-11 23:53:49','2013-10-13 17:51:58','home','Home',NULL,'<p>Welcome to SilverStripe! This is the default home page. You can edit this page by opening <a href=\"admin/\">the CMS</a>. You can now access the <a href=\"http://doc.silverstripe.org\">developer documentation</a>, or begin <a href=\"http://doc.silverstripe.org/doku.php?id=tutorials\">the tutorials.</a></p>',NULL,NULL,NULL,NULL,0,1,1,0,0,NULL,'Inherit','Inherit',NULL,3,0),
	(4,'ErrorPage','2013-10-11 23:56:41','2013-10-11 23:56:41','page-not-found','Page not found',NULL,'<p>Sorry, it seems you were trying to access a page that doesn\'t exist.</p><p>Please check the spelling of the URL you were trying to access and try again.</p>',NULL,NULL,NULL,NULL,0,0,4,0,0,NULL,'Inherit','Inherit',NULL,1,0),
	(5,'ErrorPage','2013-10-11 23:56:42','2013-10-11 23:56:42','server-error','Server error',NULL,'<p>Sorry, there was a problem handling your request.</p>',NULL,NULL,NULL,NULL,0,0,5,0,0,NULL,'Inherit','Inherit',NULL,1,0),
	(6,'AboutPage','2013-10-12 12:26:16','2013-10-12 12:27:10','about','About',NULL,NULL,NULL,NULL,NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit',NULL,3,0),
	(7,'WorkPage','2013-10-12 12:27:48','2013-10-12 12:27:58','work','Work',NULL,NULL,NULL,NULL,NULL,NULL,1,1,7,0,0,NULL,'Inherit','Inherit',NULL,2,0),
	(8,'TeamPage','2013-10-13 17:51:29','2013-10-13 17:51:40','team','Team',NULL,NULL,NULL,NULL,NULL,NULL,1,1,8,0,0,NULL,'Inherit','Inherit',NULL,2,0);

/*!40000 ALTER TABLE `SiteTree` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SiteTree_EditorGroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_EditorGroups`;

CREATE TABLE `SiteTree_EditorGroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteTreeID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SiteTreeID` (`SiteTreeID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteTree_ImageTracking
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_ImageTracking`;

CREATE TABLE `SiteTree_ImageTracking` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteTreeID` int(11) NOT NULL DEFAULT '0',
  `FileID` int(11) NOT NULL DEFAULT '0',
  `FieldName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `SiteTreeID` (`SiteTreeID`),
  KEY `FileID` (`FileID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteTree_LinkTracking
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_LinkTracking`;

CREATE TABLE `SiteTree_LinkTracking` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteTreeID` int(11) NOT NULL DEFAULT '0',
  `ChildID` int(11) NOT NULL DEFAULT '0',
  `FieldName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `SiteTreeID` (`SiteTreeID`),
  KEY `ChildID` (`ChildID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table SiteTree_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_Live`;

CREATE TABLE `SiteTree_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` enum('ErrorPage','AboutPage','WorkPage','HomePage','TeamPage','SiteTree','Page','RedirectorPage','VirtualPage','FacebookPage','ReportsPage') CHARACTER SET utf8 DEFAULT 'ErrorPage',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `URLSegment` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `MenuTitle` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Content` mediumtext CHARACTER SET utf8,
  `MetaTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `MetaDescription` mediumtext CHARACTER SET utf8,
  `MetaKeywords` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `ExtraMeta` mediumtext CHARACTER SET utf8,
  `ShowInMenus` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ShowInSearch` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `HasBrokenFile` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `HasBrokenLink` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ReportClass` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `CanViewType` enum('Anyone','LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `CanEditType` enum('LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `Priority` varchar(5) CHARACTER SET utf8 DEFAULT NULL,
  `Version` int(11) NOT NULL DEFAULT '0',
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `ParentID` (`ParentID`),
  KEY `URLSegment` (`URLSegment`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SiteTree_Live` WRITE;
/*!40000 ALTER TABLE `SiteTree_Live` DISABLE KEYS */;

INSERT INTO `SiteTree_Live` (`ID`, `ClassName`, `Created`, `LastEdited`, `URLSegment`, `Title`, `MenuTitle`, `Content`, `MetaTitle`, `MetaDescription`, `MetaKeywords`, `ExtraMeta`, `ShowInMenus`, `ShowInSearch`, `Sort`, `HasBrokenFile`, `HasBrokenLink`, `ReportClass`, `CanViewType`, `CanEditType`, `Priority`, `Version`, `ParentID`)
VALUES
	(1,'HomePage','2013-10-11 23:53:49','2013-10-13 17:51:58','home','Home',NULL,'<p>Welcome to SilverStripe! This is the default home page. You can edit this page by opening <a href=\"admin/\">the CMS</a>. You can now access the <a href=\"http://doc.silverstripe.org\">developer documentation</a>, or begin <a href=\"http://doc.silverstripe.org/doku.php?id=tutorials\">the tutorials.</a></p>',NULL,NULL,NULL,NULL,0,1,1,0,0,NULL,'Inherit','Inherit',NULL,3,0),
	(4,'ErrorPage','2013-10-11 23:56:41','2013-10-11 23:56:41','page-not-found','Page not found',NULL,'<p>Sorry, it seems you were trying to access a page that doesn\'t exist.</p><p>Please check the spelling of the URL you were trying to access and try again.</p>',NULL,NULL,NULL,NULL,0,0,4,0,0,NULL,'Inherit','Inherit',NULL,1,0),
	(5,'ErrorPage','2013-10-11 23:56:42','2013-10-11 23:56:42','server-error','Server error',NULL,'<p>Sorry, there was a problem handling your request.</p>',NULL,NULL,NULL,NULL,0,0,5,0,0,NULL,'Inherit','Inherit',NULL,1,0),
	(6,'AboutPage','2013-10-12 12:26:16','2013-10-12 12:27:11','about','About',NULL,NULL,NULL,NULL,NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit',NULL,3,0),
	(7,'WorkPage','2013-10-12 12:27:48','2013-10-12 12:27:58','work','Work',NULL,NULL,NULL,NULL,NULL,NULL,1,1,7,0,0,NULL,'Inherit','Inherit',NULL,2,0),
	(8,'TeamPage','2013-10-13 17:51:29','2013-10-13 17:51:41','team','Team',NULL,NULL,NULL,NULL,NULL,NULL,1,1,8,0,0,NULL,'Inherit','Inherit',NULL,2,0);

/*!40000 ALTER TABLE `SiteTree_Live` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SiteTree_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_versions`;

CREATE TABLE `SiteTree_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `WasPublished` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `AuthorID` int(11) NOT NULL DEFAULT '0',
  `PublisherID` int(11) NOT NULL DEFAULT '0',
  `ClassName` enum('ErrorPage','AboutPage','WorkPage','HomePage','TeamPage','SiteTree','Page','RedirectorPage','VirtualPage','FacebookPage','ReportsPage') CHARACTER SET utf8 DEFAULT 'ErrorPage',
  `Created` datetime DEFAULT NULL,
  `LastEdited` datetime DEFAULT NULL,
  `URLSegment` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `MenuTitle` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Content` mediumtext CHARACTER SET utf8,
  `MetaTitle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `MetaDescription` mediumtext CHARACTER SET utf8,
  `MetaKeywords` varchar(1024) CHARACTER SET utf8 DEFAULT NULL,
  `ExtraMeta` mediumtext CHARACTER SET utf8,
  `ShowInMenus` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ShowInSearch` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `Sort` int(11) NOT NULL DEFAULT '0',
  `HasBrokenFile` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `HasBrokenLink` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `ReportClass` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `CanViewType` enum('Anyone','LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `CanEditType` enum('LoggedInUsers','OnlyTheseUsers','Inherit') CHARACTER SET utf8 DEFAULT 'Inherit',
  `Priority` varchar(5) CHARACTER SET utf8 DEFAULT NULL,
  `ParentID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `AuthorID` (`AuthorID`),
  KEY `PublisherID` (`PublisherID`),
  KEY `ParentID` (`ParentID`),
  KEY `URLSegment` (`URLSegment`),
  KEY `ClassName` (`ClassName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SiteTree_versions` WRITE;
/*!40000 ALTER TABLE `SiteTree_versions` DISABLE KEYS */;

INSERT INTO `SiteTree_versions` (`ID`, `RecordID`, `Version`, `WasPublished`, `AuthorID`, `PublisherID`, `ClassName`, `Created`, `LastEdited`, `URLSegment`, `Title`, `MenuTitle`, `Content`, `MetaTitle`, `MetaDescription`, `MetaKeywords`, `ExtraMeta`, `ShowInMenus`, `ShowInSearch`, `Sort`, `HasBrokenFile`, `HasBrokenLink`, `ReportClass`, `CanViewType`, `CanEditType`, `Priority`, `ParentID`)
VALUES
	(1,1,1,1,0,1,'Page','2013-10-11 23:53:49','2013-10-11 23:53:49','home','Home',NULL,'<p>Welcome to SilverStripe! This is the default home page. You can edit this page by opening <a href=\"admin/\">the CMS</a>. You can now access the <a href=\"http://doc.silverstripe.org\">developer documentation</a>, or begin <a href=\"http://doc.silverstripe.org/doku.php?id=tutorials\">the tutorials.</a></p>',NULL,NULL,NULL,NULL,1,1,1,0,0,NULL,'Inherit','Inherit',NULL,0),
	(2,2,1,1,1,1,'Page','2013-10-11 23:56:41','2013-10-11 23:56:41','about-us','About Us',NULL,'<p>You can fill this page out with your own content, or delete it and create your own pages.<br></p>',NULL,NULL,NULL,NULL,1,1,2,0,0,NULL,'Inherit','Inherit',NULL,0),
	(3,3,1,1,1,1,'Page','2013-10-11 23:56:41','2013-10-11 23:56:41','contact-us','Contact Us',NULL,'<p>You can fill this page out with your own content, or delete it and create your own pages.<br></p>',NULL,NULL,NULL,NULL,1,1,3,0,0,NULL,'Inherit','Inherit',NULL,0),
	(4,4,1,1,1,1,'ErrorPage','2013-10-11 23:56:41','2013-10-11 23:56:41','page-not-found','Page not found',NULL,'<p>Sorry, it seems you were trying to access a page that doesn\'t exist.</p><p>Please check the spelling of the URL you were trying to access and try again.</p>',NULL,NULL,NULL,NULL,0,0,4,0,0,NULL,'Inherit','Inherit',NULL,0),
	(5,5,1,1,1,1,'ErrorPage','2013-10-11 23:56:42','2013-10-11 23:56:42','server-error','Server error',NULL,'<p>Sorry, there was a problem handling your request.</p>',NULL,NULL,NULL,NULL,0,0,5,0,0,NULL,'Inherit','Inherit',NULL,0),
	(6,6,1,0,1,0,'AboutPage','2013-10-12 12:26:16','2013-10-12 12:26:16','new-about-page','New About Page',NULL,NULL,NULL,NULL,NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit',NULL,0),
	(7,6,2,1,1,1,'AboutPage','2013-10-12 12:26:16','2013-10-12 12:26:31','about','ABout',NULL,NULL,NULL,NULL,NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit',NULL,0),
	(8,6,3,1,1,1,'AboutPage','2013-10-12 12:26:16','2013-10-12 12:27:10','about','About',NULL,NULL,NULL,NULL,NULL,NULL,1,1,6,0,0,NULL,'Inherit','Inherit',NULL,0),
	(9,7,1,0,1,0,'WorkPage','2013-10-12 12:27:48','2013-10-12 12:27:48','new-work-page','New Work Page',NULL,NULL,NULL,NULL,NULL,NULL,1,1,7,0,0,NULL,'Inherit','Inherit',NULL,0),
	(10,7,2,1,1,1,'WorkPage','2013-10-12 12:27:48','2013-10-12 12:27:58','work','Work',NULL,NULL,NULL,NULL,NULL,NULL,1,1,7,0,0,NULL,'Inherit','Inherit',NULL,0),
	(11,1,2,1,1,1,'HomePage','2013-10-11 23:53:49','2013-10-12 16:27:07','home','Home',NULL,'<p>Welcome to SilverStripe! This is the default home page. You can edit this page by opening <a href=\"admin/\">the CMS</a>. You can now access the <a href=\"http://doc.silverstripe.org\">developer documentation</a>, or begin <a href=\"http://doc.silverstripe.org/doku.php?id=tutorials\">the tutorials.</a></p>',NULL,NULL,NULL,NULL,1,1,1,0,0,NULL,'Inherit','Inherit',NULL,0),
	(12,8,1,0,1,0,'TeamPage','2013-10-13 17:51:29','2013-10-13 17:51:29','new-team-page','New Team Page',NULL,NULL,NULL,NULL,NULL,NULL,1,1,8,0,0,NULL,'Inherit','Inherit',NULL,0),
	(13,8,2,1,1,1,'TeamPage','2013-10-13 17:51:29','2013-10-13 17:51:40','team','Team',NULL,NULL,NULL,NULL,NULL,NULL,1,1,8,0,0,NULL,'Inherit','Inherit',NULL,0),
	(14,1,3,1,1,1,'HomePage','2013-10-11 23:53:49','2013-10-13 17:51:58','home','Home',NULL,'<p>Welcome to SilverStripe! This is the default home page. You can edit this page by opening <a href=\"admin/\">the CMS</a>. You can now access the <a href=\"http://doc.silverstripe.org\">developer documentation</a>, or begin <a href=\"http://doc.silverstripe.org/doku.php?id=tutorials\">the tutorials.</a></p>',NULL,NULL,NULL,NULL,0,1,1,0,0,NULL,'Inherit','Inherit',NULL,0);

/*!40000 ALTER TABLE `SiteTree_versions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SiteTree_ViewerGroups
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SiteTree_ViewerGroups`;

CREATE TABLE `SiteTree_ViewerGroups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteTreeID` int(11) NOT NULL DEFAULT '0',
  `GroupID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SiteTreeID` (`SiteTreeID`),
  KEY `GroupID` (`GroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Slider
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Slider`;

CREATE TABLE `Slider` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Header` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Keyword` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Description` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `LinkDescription` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Version` int(11) NOT NULL DEFAULT '0',
  `LinkID` int(11) NOT NULL DEFAULT '0',
  `OverlayImageID` int(11) NOT NULL DEFAULT '0',
  `ProjectID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `LinkID` (`LinkID`),
  KEY `OverlayImageID` (`OverlayImageID`),
  KEY `ProjectID` (`ProjectID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Slider` WRITE;
/*!40000 ALTER TABLE `Slider` DISABLE KEYS */;

INSERT INTO `Slider` (`ID`, `Header`, `Keyword`, `Description`, `LinkDescription`, `Version`, `LinkID`, `OverlayImageID`, `ProjectID`)
VALUES
	(15,'Hi There! Welcome to:','CHOCOLATE','The World\'s first chocolate website.','see project',0,1,0,1),
	(16,'Howdy!','COLOUR','A festival....','see project',0,6,0,0);

/*!40000 ALTER TABLE `Slider` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SliderImage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SliderImage`;

CREATE TABLE `SliderImage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SliderID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `SliderID` (`SliderID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `SliderImage` WRITE;
/*!40000 ALTER TABLE `SliderImage` DISABLE KEYS */;

INSERT INTO `SliderImage` (`ID`, `SliderID`)
VALUES
	(3,15),
	(4,16);

/*!40000 ALTER TABLE `SliderImage` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SWFMedia
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SWFMedia`;

CREATE TABLE `SWFMedia` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `FileID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `FileID` (`FileID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table TeamMember
# ------------------------------------------------------------

DROP TABLE IF EXISTS `TeamMember`;

CREATE TABLE `TeamMember` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `LastName` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `Role` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `Responsibilities` mediumtext CHARACTER SET utf8,
  `Intro` mediumtext CHARACTER SET utf8,
  `Bio` mediumtext CHARACTER SET utf8,
  `PhotographerID` int(11) NOT NULL DEFAULT '0',
  `ColourID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `PhotographerID` (`PhotographerID`),
  KEY `ColourID` (`ColourID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `TeamMember` WRITE;
/*!40000 ALTER TABLE `TeamMember` DISABLE KEYS */;

INSERT INTO `TeamMember` (`ID`, `FirstName`, `LastName`, `Role`, `Responsibilities`, `Intro`, `Bio`, `PhotographerID`, `ColourID`)
VALUES
	(17,'Pep','Zuijderwijk','Sit Purus Fusce','Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.','Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur.','<p>Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</p>\n<p>Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>\n<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur.</p>',0,0);

/*!40000 ALTER TABLE `TeamMember` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table VimeoMedia
# ------------------------------------------------------------

DROP TABLE IF EXISTS `VimeoMedia`;

CREATE TABLE `VimeoMedia` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `vimeoID` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table VirtualPage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `VirtualPage`;

CREATE TABLE `VirtualPage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `VersionID` int(11) NOT NULL DEFAULT '0',
  `CopyContentFromID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `CopyContentFromID` (`CopyContentFromID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table VirtualPage_Live
# ------------------------------------------------------------

DROP TABLE IF EXISTS `VirtualPage_Live`;

CREATE TABLE `VirtualPage_Live` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `VersionID` int(11) NOT NULL DEFAULT '0',
  `CopyContentFromID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `CopyContentFromID` (`CopyContentFromID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table VirtualPage_versions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `VirtualPage_versions`;

CREATE TABLE `VirtualPage_versions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RecordID` int(11) NOT NULL DEFAULT '0',
  `Version` int(11) NOT NULL DEFAULT '0',
  `VersionID` int(11) NOT NULL DEFAULT '0',
  `CopyContentFromID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `RecordID_Version` (`RecordID`,`Version`),
  KEY `RecordID` (`RecordID`),
  KEY `Version` (`Version`),
  KEY `CopyContentFromID` (`CopyContentFromID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
