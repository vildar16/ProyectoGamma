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
a38a16d0-767a-11eb-abe2-cecd029e558e:1-144835344';

--
-- Table structure for table `problema_asignado`
--

DROP TABLE IF EXISTS `problema_asignado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `problema_asignado` (
  `id_problema_asignado` int NOT NULL AUTO_INCREMENT,
  `resuelto` tinyint NOT NULL,
  `codigo_fuente` text,
  `analisis` text,
  `id_problema_catalogo` int NOT NULL,
  `id_usuario` varchar(100) NOT NULL,
  `codigo_quest` int DEFAULT NULL,
  PRIMARY KEY (`id_problema_asignado`),
  KEY `fk_id_problema_catalogo_idx` (`id_problema_catalogo`),
  KEY `fk_id_usuario_idx` (`id_usuario`),
  KEY `codigo_quest` (`codigo_quest`),
  CONSTRAINT `fk_id_problema_catalogo` FOREIGN KEY (`id_problema_catalogo`) REFERENCES `problema_catalogo` (`id_problema`),
  CONSTRAINT `fk_id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`nombre_usuario`),
  CONSTRAINT `problema_asignado_ibfk_1` FOREIGN KEY (`codigo_quest`) REFERENCES `quest` (`codigo_sesion`)
) ENGINE=InnoDB AUTO_INCREMENT=215 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `problema_asignado`
--

LOCK TABLES `problema_asignado` WRITE;
/*!40000 ALTER TABLE `problema_asignado` DISABLE KEYS */;
INSERT INTO `problema_asignado` VALUES (19,0,NULL,NULL,123456,'Alita_de_Pollo',8080),(20,0,NULL,NULL,123467,'Alita_de_Pollo',8080),(21,0,NULL,NULL,123457,'asd',8080),(22,0,NULL,NULL,123468,'asd',8080),(23,0,NULL,NULL,123458,'EddyRJ',8080),(24,0,NULL,NULL,123469,'EddyRJ',8080),(25,0,NULL,NULL,123459,'hola',8080),(26,0,NULL,NULL,123470,'hola',8080),(27,0,NULL,NULL,123471,'lesah',8080),(28,0,NULL,NULL,123460,'lesah',8080),(29,0,NULL,NULL,123472,'test8',8080),(30,0,NULL,NULL,123461,'test8',8080),(31,0,NULL,NULL,123473,'Alita_de_Pollo',8080),(32,0,NULL,NULL,123474,'asd',8080),(33,0,NULL,NULL,123475,'EddyRJ',8080),(34,0,NULL,NULL,123476,'hola',8080),(35,0,NULL,NULL,123477,'lesah',8080),(36,0,NULL,NULL,123478,'test8',8080),(37,0,NULL,NULL,123479,'Alita_de_Pollo',8080),(38,0,NULL,NULL,123480,'asd',8080),(39,0,NULL,NULL,123481,'EddyRJ',8080),(40,0,NULL,NULL,123482,'hola',8080),(41,0,NULL,NULL,123483,'lesah',8080),(42,0,NULL,NULL,123484,'test8',8080),(195,0,NULL,NULL,123467,'adalovelace',8080),(196,0,NULL,NULL,123468,'allanturin',8080),(197,0,NULL,NULL,123469,'dijkstra',8080),(198,1,'asdsadsadsa','',123470,'hoare',8080),(199,0,NULL,NULL,123471,'moore',8080),(200,0,NULL,NULL,123472,'adalovelace',8080),(201,0,NULL,NULL,123473,'allanturin',8080),(202,0,NULL,NULL,123474,'dijkstra',8080),(203,1,'// Primer programa de ejemplo en C++\n //aa\n#include <iostream>\n \nint main () \n{\n    std::cout << \"Hola, mundoxd\";\n    return 0;\n}','0',123475,'hoare',8080),(204,0,NULL,NULL,123476,'moore',8080),(205,0,NULL,NULL,123477,'adalovelace',8080),(206,0,NULL,NULL,123478,'allanturin',8080),(207,0,NULL,NULL,123479,'dijkstra',8080),(208,1,'print(\'hola planeta\')','0',123480,'hoare',8080),(209,0,NULL,NULL,123481,'moore',8080),(210,0,NULL,NULL,123482,'adalovelace',8080),(211,0,NULL,NULL,123483,'allanturin',8080),(212,0,NULL,NULL,123484,'dijkstra',8080),(213,1,'print(\"asdsadsadasd\")','0',123485,'hoare',8080),(214,1,NULL,NULL,123486,'moore',8080);
/*!40000 ALTER TABLE `problema_asignado` ENABLE KEYS */;
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

-- Dump completed on 2022-06-17  2:44:22
