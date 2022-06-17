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
a38a16d0-767a-11eb-abe2-cecd029e558e:1-144835369';

--
-- Table structure for table `usuario_accion_usuario`
--

DROP TABLE IF EXISTS `usuario_accion_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_accion_usuario` (
  `id_problema` int NOT NULL,
  `id_usuario_emisor` varchar(100) NOT NULL,
  `id_usuario_receptor` varchar(100) NOT NULL,
  `timestamp` date NOT NULL,
  `tiempo` date NOT NULL,
  `efectuo` int NOT NULL DEFAULT '0',
  `id_metodo_resolucion` int NOT NULL,
  PRIMARY KEY (`id_problema`,`id_usuario_emisor`,`id_usuario_receptor`,`id_metodo_resolucion`),
  KEY `fk_id_usuario_ataca_idx` (`id_usuario_emisor`),
  KEY `fk_id_usuario_victima_idx` (`id_usuario_receptor`),
  KEY `fk_id_metodo_resolucion_idx` (`id_metodo_resolucion`),
  CONSTRAINT `fk_id_metodo_resolucion` FOREIGN KEY (`id_metodo_resolucion`) REFERENCES `metodo_resolucion` (`id_metodo_resolucion`),
  CONSTRAINT `fk_id_problema_usuario_ataca` FOREIGN KEY (`id_problema`) REFERENCES `problema_asignado` (`id_problema_asignado`),
  CONSTRAINT `fk_id_usuario_ataca` FOREIGN KEY (`id_usuario_emisor`) REFERENCES `usuario` (`nombre_usuario`),
  CONSTRAINT `fk_id_usuario_victima` FOREIGN KEY (`id_usuario_receptor`) REFERENCES `usuario` (`nombre_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_accion_usuario`
--

LOCK TABLES `usuario_accion_usuario` WRITE;
/*!40000 ALTER TABLE `usuario_accion_usuario` DISABLE KEYS */;
INSERT INTO `usuario_accion_usuario` VALUES (27,'lesah','ajio','2022-06-16','2022-06-20',2,2),(27,'lesah','ajio','2022-06-16','2022-06-20',2,3),(28,'lesah','lesah','2022-06-16','2022-06-16',2,1),(196,'allanturin','allanturin','2022-06-17','2022-06-21',0,3),(211,'allanturin','allanturin','2022-06-17','2022-06-21',0,3);
/*!40000 ALTER TABLE `usuario_accion_usuario` ENABLE KEYS */;
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

-- Dump completed on 2022-06-17  2:44:37
