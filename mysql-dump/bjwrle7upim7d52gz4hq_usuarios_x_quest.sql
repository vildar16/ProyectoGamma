-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: bjwrle7upim7d52gz4hq-mysql.services.clever-cloud.com    Database: bjwrle7upim7d52gz4hq
-- ------------------------------------------------------
-- Server version	8.0.22-13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'a05a675a-1414-11e9-9c82-cecd01b08c7e:1-491550428,
a38a16d0-767a-11eb-abe2-cecd029e558e:1-144835379';

--
-- Table structure for table `usuarios_x_quest`
--

DROP TABLE IF EXISTS `usuarios_x_quest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_x_quest` (
  `id_usuario` varchar(100) NOT NULL,
  `id_sesion` int NOT NULL,
  PRIMARY KEY (`id_usuario`,`id_sesion`),
  KEY `fk_id_sesion_idx` (`id_sesion`),
  CONSTRAINT `fk_id_sesion_x_usuario` FOREIGN KEY (`id_sesion`) REFERENCES `quest` (`codigo_sesion`),
  CONSTRAINT `fk_id_usuario_x_sesion` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`nombre_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_x_quest`
--

LOCK TABLES `usuarios_x_quest` WRITE;
/*!40000 ALTER TABLE `usuarios_x_quest` DISABLE KEYS */;
INSERT INTO `usuarios_x_quest` VALUES ('admin',1616),('Ale',1616),('adalovelace',8080),('allanturin',8080),('dijkstra',8080),('hoare',8080),('moore',8080),('Alita_de_Pollo',22222),('asd',22222),('EddyRJ',22222),('hola',22222),('lesah',22222),('test8',22222),('asd',33333),('hola',33333),('lesah',33333),('asd',99999),('hola',99999),('lesah',99999),('nu1',99999),('nu2',99999),('nu3',99999),('nu4',99999),('nu5',99999);
/*!40000 ALTER TABLE `usuarios_x_quest` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-17  2:44:47
