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
a38a16d0-767a-11eb-abe2-cecd029e558e:1-144835408';

--
-- Table structure for table `ganancias_x_usuario_x_quest`
--

DROP TABLE IF EXISTS `ganancias_x_usuario_x_quest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ganancias_x_usuario_x_quest` (
  `id_categoria` int NOT NULL,
  `id_usuario` varchar(100) NOT NULL,
  `monedas` float NOT NULL DEFAULT '0',
  `globos` float NOT NULL DEFAULT '0',
  `id_quest` int NOT NULL,
  PRIMARY KEY (`id_categoria`,`id_usuario`,`id_quest`),
  KEY `fk_id_usuario_x_categoria_idx` (`id_usuario`),
  KEY `fk_id_categoria_x_usuario_idx` (`id_categoria`),
  KEY `fk_id_usuario_x_quest_idx` (`id_quest`),
  CONSTRAINT `fk_id_categoria_x_usuario` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`),
  CONSTRAINT `fk_id_usuario_x_categoria` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`nombre_usuario`),
  CONSTRAINT `fk_id_usuario_x_quest` FOREIGN KEY (`id_quest`) REFERENCES `quest` (`codigo_sesion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ganancias_x_usuario_x_quest`
--

LOCK TABLES `ganancias_x_usuario_x_quest` WRITE;
/*!40000 ALTER TABLE `ganancias_x_usuario_x_quest` DISABLE KEYS */;
INSERT INTO `ganancias_x_usuario_x_quest` VALUES (56,'adalovelace',5,5,8080),(56,'allanturin',6,4,8080),(56,'dijkstra',7,3,8080),(56,'hoare',8,2,8080),(56,'moore',-2,2,8080);
/*!40000 ALTER TABLE `ganancias_x_usuario_x_quest` ENABLE KEYS */;
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

-- Dump completed on 2022-06-17  2:45:08
